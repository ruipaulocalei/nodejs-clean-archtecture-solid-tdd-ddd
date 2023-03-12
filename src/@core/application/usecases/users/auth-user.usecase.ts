import { UserEntity } from '../../../domain/entities/users/user.entity';
import { IUserRepository } from '../../../domain/repositories/users/user.repository';
import { ServerError } from '../../../domain/shared/errors/server-error';
import { HashProviderInterface } from '../../providers/hash-provider/hash-provider.interface';
import { JwtProviderInterface } from '../../providers/jwt-provider/jwt-provider.interface';

export class AuthUserUsecase {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: HashProviderInterface,
    private jwtProvider: JwtProviderInterface,
  ) {}
  async execute({
    email,
    password,
  }: AuthUserInput): Promise<AuthUserOutput | undefined> {
    const user = await this.userRepository.findOneByEmail(email);
    if (user !== undefined && !user) {
      throw new ServerError('Wrong credentials', 403);
    }
    const hashedPassword = await this.hashProvider.compareHash(
      password,
      user.password,
    );
    if (!hashedPassword) {
      throw new ServerError('Wrong credentials', 401);
    }
    const token = this.jwtProvider.sign(`${user.id}`);
    return {
      user,
      token,
    };
  }
}

type AuthUserInput = {
  email: string;
  password: string;
};
type AuthUserOutput = {
  user: UserEntity;
  token: string;
};
