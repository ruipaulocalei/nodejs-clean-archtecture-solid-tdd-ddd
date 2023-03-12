import { Router } from 'express';
import { AppointmentController } from '../../controllers/appointments/appointments.controller';
import { authMiddleware } from '../../middleware/auth.middleware';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.post('/', authMiddleware, appointmentController.create);

export default appointmentRouter;
