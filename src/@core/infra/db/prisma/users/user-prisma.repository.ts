import {
  IUserRepository,
  UserEntityOutput,
} from '../../../../domain/repositories/users/user.repository';
import prismaClient from '../index';

export class UserPrismaRepository implements IUserRepository {
  async findOneById(id: string): Promise<UserEntityOutput | null> {
    return await prismaClient.users.findUnique({
      where: {
        id,
      },
    });
  }
  async create({
    name,
    email,
    password,
  }: UserEntityOutput): Promise<UserEntityOutput> {
    return await prismaClient.users.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
  async findOneByEmail(email: string): Promise<UserEntityOutput | null> {
    return await prismaClient.users.findUnique({
      where: {
        email,
      },
    });
  }
}
