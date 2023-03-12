export type VerifyPayload = {
  iat: number;
  exp?: number;
  sub: string;
};
export interface JwtProviderInterface {
  sign(id: string): string;
  verify(token: string): string | object;
}
