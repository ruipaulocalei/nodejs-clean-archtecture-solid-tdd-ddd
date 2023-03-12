import { AppointmentEntity } from '../../../domain/entities/appointments/appointment.entity';
import { IAppointmentRepository } from '../../../domain/repositories/appointments/appointment.repository';

export class FindAppointmentUseCase {
  constructor(private AppointmentRepository: IAppointmentRepository) {}
  async execute({
    date,
  }: FindAppointmentInputDto): Promise<FindAppointmentOutputDto | null> {
    const appointment = await this.AppointmentRepository.findByDate(date);
    return appointment || null;
  }
}

type FindAppointmentInputDto = {
  date: Date;
};

type FindAppointmentOutputDto = {
  id?: string;
  provider: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;
};
