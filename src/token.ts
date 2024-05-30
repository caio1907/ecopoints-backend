import { Params } from 'express-jwt';

export const jwtConfig: Params = {
  secret: process.env.SECRET_JWT ?? 'ecopoints_secret_phrase',
  algorithms: ['HS256'],
  maxAge: '1h'
};
