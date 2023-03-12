import { it, describe, expect } from 'vitest';
import { AppointmentEntity } from './appointment.entity';

describe('Product Unit Test', () => {
  it('Should create a product', () => {
    const appointment = new AppointmentEntity('Rice', 400);
    expect(appointment).toBeInstanceOf(AppointmentEntity);
  });

  it('Should not create a product with empty name', () => {
    expect(() => {
      return new AppointmentEntity(provider: "");
    }).toThrow();
  });
});
