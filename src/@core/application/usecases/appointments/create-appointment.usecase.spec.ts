import { describe, expect, it, test } from 'vitest';
import { AppointmentInMemoryRepository } from '../../../infra/db/in-memory/product-in-memory.repository';
import { CreateAppointmentUseCase } from './create-appointment.usecase';

describe('Create Appointment Use Case', () => {
  test('Should be able to create appointment', async () => {
    const appointment = {
      id: 'crypto.randomUUID',
      provider: 'Rui Paulo Calei',
      date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const repo = new AppointmentInMemoryRepository();
    const sut = new CreateAppointmentUseCase(repo);
    const appointmentUseCase = await sut.execute({
      provider: 'Rui Paulo Calei',
      date: new Date(),
    });
    expect(appointmentUseCase).toHaveProperty('ok');
    expect(appointmentUseCase.ok).toBe(true);
  });

  it('Should not be able to create product existent in db', async () => {

    const repo = new AppointmentInMemoryRepository();
    const sut = new CreateAppointmentUseCase(repo);
    const provider = 'Rui Paulo Calei';
    await sut.execute({
      provider,
      date: new Date(),
    });
    expect(
      sut.execute({
        provider,
        date: new Date(),
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
