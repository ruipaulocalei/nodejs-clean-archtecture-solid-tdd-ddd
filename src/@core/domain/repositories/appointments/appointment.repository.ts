import { AppointmentEntity } from '../../entities/appointments/appointment.entity';

export type AppointmentDataProps = {
  name: any;
  ok: boolean;
  error?: string;
};
export type AppointmentEntityOutput = AppointmentEntity;
export interface IAppointmentRepository {
  create(product: AppointmentEntity): Promise<void>;
  findByDate(date: Date): Promise<AppointmentEntityOutput | null>;
}
