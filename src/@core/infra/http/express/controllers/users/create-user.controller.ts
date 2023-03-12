import { Request, Response } from 'express';
import { CreateUserUsecase } from '../../../../../application/usecases/users/create-user.usecase';
import { UserPrismaRepository } from '../../../../db/prisma/users/user-prisma.repository';
import { BcryptProvider } from '../../../../providers/hash-provider/bcrypt-provider';
class CreateUserController {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const userPrismaRepository = new UserPrismaRepository();
      const bcryptProvider = new BcryptProvider();
      const createUserUsecase = new CreateUserUsecase(
        userPrismaRepository,
        bcryptProvider,
      );
      const user = await createUserUsecase.execute({ name, email, password });
      delete user?.password
      res.status(201).json({ user });
    } catch (err: any) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

export { CreateUserController };
