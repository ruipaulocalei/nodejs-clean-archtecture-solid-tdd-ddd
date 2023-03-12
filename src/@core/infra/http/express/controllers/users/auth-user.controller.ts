import { Request, Response } from 'express';
import { AuthUserUsecase } from '../../../../../application/usecases/users/auth-user.usecase';
import { UserPrismaRepository } from '../../../../db/prisma/users/user-prisma.repository';
import { BcryptProvider } from '../../../../providers/hash-provider/bcrypt-provider';
import { JwtProvider } from '../../../../providers/jwt-provider/jwt-provider';
class AuthUserController {
  async auth(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userPrismaRepository = new UserPrismaRepository();
      const bcryptProvider = new BcryptProvider();
      const jwtProvider = new JwtProvider();
      const authUserUsecase = new AuthUserUsecase(
        userPrismaRepository,
        bcryptProvider,
        jwtProvider,
      );
      //@ts-ignore
      const { user, token } = await authUserUsecase.execute({
        email,
        password,
      });
      delete user?.password;
      res.json({ user, token });
    } catch (err: any) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

export { AuthUserController };
