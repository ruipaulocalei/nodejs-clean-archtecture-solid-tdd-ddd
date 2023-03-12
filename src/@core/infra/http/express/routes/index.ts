import { Router } from 'express';
import appointmentRouter from './appointments/appointments.routes';
import authUserRouter from './users/auth.routes';
import createUserRouter from './users/users.routes';

const routes = Router();
routes.use('/appointment', appointmentRouter);
routes.use('/auth', authUserRouter);
routes.use('/user', createUserRouter);
export default routes;
