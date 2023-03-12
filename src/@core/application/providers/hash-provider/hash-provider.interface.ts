export interface HashProviderInterface {
  generateHash(plainText: string): Promise<string>;
  compareHash(plainText: string, encrypted: string): Promise<boolean>;
}
