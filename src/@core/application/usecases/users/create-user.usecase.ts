import {
  IUserRepository,
  UserEntityOutput,
} from '../../../domain/repositories/users/user.repository';
import { ServerError } from '../../../domain/shared/errors/server-error';
import { HashProviderInterface } from '../../providers/hash-provider/hash-provider.interface';

export class CreateUserUsecase {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: HashProviderInterface,
  ) {}
  async execute({
    name,
    email,
    password,
  }: CreateUserInput): Promise<UserEntityOutput | undefined> {
    const user = await this.userRepository.findOneByEmail(email);
    if (user) {
      throw new ServerError('This user already exists', 401);
    }
    const hashedPassword = await this.hashProvider.generateHash(password);
    return await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }
}

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};
