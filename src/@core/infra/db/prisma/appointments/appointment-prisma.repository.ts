import { AppointmentEntity } from '../../../../domain/entities/appointments/appointment.entity';
import {
  IAppointmentRepository,
  AppointmentEntityOutput,
} from '../../../../domain/repositories/appointments/appointment.repository';
import prismaClient from '../index';
export class AppointmentPrismaRepository implements IAppointmentRepository {
  async create({ provider, date }: AppointmentEntity): Promise<void> {
    await prismaClient.appointment.create({
      data: {
        provider,
        date,
      },
    });
  }

  async findByDate(date: Date): Promise<AppointmentEntityOutput | null> {
    return await prismaClient.appointment.findFirst({
      where: {
        date,
      },
    });
    //console.log(JSON.stringify(product))
    /* const pro = new ProductEntity({
      name: `${product?.name}`,
      price: parseFloat(`${product?.price}`),
    });
    console.log(JSON.stringify(pro));
    return pro; */
  }
}
