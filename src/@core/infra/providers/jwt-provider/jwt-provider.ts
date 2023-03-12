import { sign, verify } from 'jsonwebtoken';
import {
  JwtProviderInterface,
} from '../../../application/providers/jwt-provider/jwt-provider.interface';

export class JwtProvider implements JwtProviderInterface {
  verify(token: string): string | object {
    //@ts-ignore
    return verify(token, process.env.JWT_SECRET);
  }

  sign(id: string): string {
    //@ts-ignore
    return sign({ id }, process.env.JWT_SECRET);
  }
}
