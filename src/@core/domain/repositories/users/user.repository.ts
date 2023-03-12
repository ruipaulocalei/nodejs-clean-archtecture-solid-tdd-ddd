import { UserEntity } from '../../entities/users/user.entity';

export type UserEntityOutput = UserEntity;
export interface IUserRepository {
  create(user: UserEntityOutput): Promise<UserEntityOutput>;
  findOneByEmail(email: string): Promise<UserEntityOutput | null>;
  findOneById(id: string): Promise<UserEntityOutput | null>;
}
