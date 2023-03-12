import { Request, Response } from 'express';
import { CreateAppointmentUseCase } from '../../../../../application/usecases/appointments/create-appointment.usecase';
import { AppointmentPrismaRepository } from '../../../../db/prisma/appointments/appointment-prisma.repository';
import { DatefnsProvider } from '../../../../providers/date-provider/datefns-provider';

class AppointmentController {
  async create(req: Request, res: Response) {
    try {
      const { provider, date } = req.body;
      const appointmentPrismaRepository = new AppointmentPrismaRepository();
      const createAppointmentUseCase = new CreateAppointmentUseCase(
        appointmentPrismaRepository,
      );
      const datefnsPtovider = new DatefnsProvider();
      const parsedDate = datefnsPtovider.parseDate(date);
      const appointment = await createAppointmentUseCase.execute({
        provider,
        date: parsedDate,
      });
      res.status(201).json({ appointment });
    } catch (err: any) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  }
}

export { AppointmentController };
