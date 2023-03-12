import { Router } from 'express';
import { CreateUserController } from '../../controllers/users/create-user.controller';

const createUserRouter = Router();
const createUserController = new CreateUserController();
createUserRouter.post('/', createUserController.create);

export default createUserRouter;
