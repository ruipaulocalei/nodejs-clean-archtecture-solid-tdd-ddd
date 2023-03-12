import { ServerError } from '../../shared/errors/server-error';
import { CommonEntity } from '../common/common.entity';

type Role = '';

export type UserEntityProps = {
  name: string;
  email: string;
  password: string;
};
export class UserEntity extends CommonEntity {
  name: string;
  email: string;
  password: string;

  constructor(name: string, email: string, password: string, role: Role) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;

    if (!name.trim()) {
      throw new ServerError('The name is required');
    }
    if (!email.trim()) {
      throw new ServerError('The email is required');
    }
    if (!password.trim() && password.length < 6) {
      throw new ServerError('The password should be 6 characters at least');
    }
  }
}
