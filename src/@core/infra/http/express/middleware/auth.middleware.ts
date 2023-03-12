import { NextFunction, Request, Response } from 'express';
import { ServerError } from '../../../../domain/shared/errors/server-error';
import { JwtProvider } from '../../../providers/jwt-provider/jwt-provider';

type Payload = {
  id: string;
  iat: number;
};
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const jwtTokenInHeaders = req.headers;
  const jwtExists = 'jwt-token' in jwtTokenInHeaders;
  if (!jwtExists) {
    throw new ServerError('token is missing', 401);
  }
  try {
    const token = jwtTokenInHeaders['jwt-token'] as string;
    const jwtProvider = new JwtProvider();
    const decoded = jwtProvider.verify(token);
    if (typeof decoded === 'object' && decoded.hasOwnProperty('id')) {
      const { id } = decoded as Payload;
      req.userId = id;
    }
    return next();
  } catch (err) {
    throw new ServerError('Token is invalid', 401);
  }
}
