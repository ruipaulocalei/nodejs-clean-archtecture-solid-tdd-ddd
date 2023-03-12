import { CommonEntity } from '../common/common.entity';

export class AppointmentEntity extends CommonEntity {
  id?: string;
  provider: string;
  date: Date;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(provider: string, date: Date) {
    super();
    this.provider = provider;
    this.date = date;

    if (provider === ''.trim()) {
      throw new Error('The provider is required');
    }

    if (!date) {
      throw new Error('The date is required');
    }
  }
  /* 	get id() {
		return this.productProps.id
	}

	get name() {
		return this.productProps.name
	}
	get price() {
		return this.productProps.price
	}
*/
}
