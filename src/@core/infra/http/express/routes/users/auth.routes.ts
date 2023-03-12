import { Router } from 'express';
import { AuthUserController } from '../../controllers/users/auth-user.controller';
import { CreateUserController } from '../../controllers/users/create-user.controller';

const authUserRouter = Router();
const authUserController = new AuthUserController();

authUserRouter.post('/', authUserController.auth);

export default authUserRouter;
