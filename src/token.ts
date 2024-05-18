import { Secret, SignOptions } from 'jsonwebtoken';

type Config = {
  payload: {}
  secret: string,
  options: SignOptions
}

export const jwtSecret = process.env.SECRET_JWT ?? 'ecopoints_secret_phrase';

export const jwtConfig: Config = {
  payload: {},
  secret: jwtSecret,
  options: {algorithm: 'HS256'}
};
