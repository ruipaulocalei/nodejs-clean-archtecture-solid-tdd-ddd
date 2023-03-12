import { randomUUID } from 'crypto';
import { AppointmentEntity } from '../../../domain/entities/appointments/appointment.entity';
import {
  IAppointmentRepository,
  AppointmentDataProps,
} from '../../../domain/repositories/appointments/appointment.repository';

export class AppointmentInMemoryRepository implements IAppointmentRepository {
  private appointments: AppointmentEntity[] = [];
  async create({ provider, date }: AppointmentEntity): Promise<void> {
    const appointment = new AppointmentEntity(provider, date);
    Object.assign(appointment, { id: randomUUID(), provider, date });
    this.appointments.push(appointment);
  }
  update(product: AppointmentEntity): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findByDate(date: Date): Promise<AppointmentEntity | null> {
    const appointment = this.appointments.find(
      appointment => appointment.date === date,
    );
    return appointment || null;
  }
}
