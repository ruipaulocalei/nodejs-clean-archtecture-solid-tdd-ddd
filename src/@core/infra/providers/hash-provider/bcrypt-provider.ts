import { compare, hash } from 'bcrypt';
import { HashProviderInterface } from '../../../application/providers/hash-provider/hash-provider.interface';

export class BcryptProvider implements HashProviderInterface {
  async generateHash(plainText: string): Promise<string> {
    return await hash(plainText, 8);
  }
  async compareHash(plainText: string, encrypted: string): Promise<boolean> {
    return await compare(plainText, encrypted);
  }
}
