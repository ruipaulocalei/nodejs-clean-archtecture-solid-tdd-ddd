import { AppointmentEntity } from '../../../domain/entities/appointments/appointment.entity';
import { IAppointmentRepository } from '../../../domain/repositories/appointments/appointment.repository';
import { OutputMessage } from '../../../domain/shared/output-messages/output-message';
import { ServerError } from '../../../domain/shared/errors/server-error';
import { DatefnsProvider } from '../../../infra/providers/date-provider/datefns-provider';
export class CreateAppointmentUseCase {
  constructor(private appointmentRepository: IAppointmentRepository) {}
  async execute({
    provider,
    date,
  }: CreateAppointmentInputDto): Promise<CreateAppointmentOutputDto> {
    const datefnsPtovider = new DatefnsProvider();
      const appointmentDate = datefnsPtovider.startHour(date);;
    const appointment = await this.appointmentRepository.findByDate(
      appointmentDate,
    );
    if (appointment) {
      throw new ServerError('Appointment already exists!', 403);
    }
    const appointmentEntity = new AppointmentEntity(provider, date);
    await this.appointmentRepository.create(appointmentEntity);
    return {
      ok: true,
    };
  }
}

type CreateAppointmentInputDto = {
  provider: string;
  date: Date;
};

class CreateAppointmentOutputDto extends OutputMessage {}
