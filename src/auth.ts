import Users from '@models/user';
import * as crypto from "crypto";
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {  } from 'express-jwt';
import { jwtConfig } from './token';
dotenv.config();

const DEFAULT_MESSAGE_INVALID_USER = 'Você não digitou os dados corretamente ou a sua conta está desativada.';

export const login = async (req: Request, response: Response) => {
  let { email, password } = req.body;
  if (!email) {
    return response.status(400).json({
      message: '%fieldName is a required field.',
      parameters: {
        fieldName: 'email'
      }
    });
  }
  email = email.toString().replace(/[^A-Z0-9@.-]/gi, '')
  if (!password) {
    return response.status(400).json({
      message: '%fieldName is a required field.',
      parameters: {
        fieldName: 'password'
      }
    });
  }

  return await Users.findOne({
    where: {
      email: email
    }
  }).then(async result => {
    let user = result;
    if (user) {
      const { attempts } = user;
      if (attempts > 2) {
        return response.status(401).json({message: DEFAULT_MESSAGE_INVALID_USER});
      }
      if (user.password !== Encrypt(password)) {
        user.attempts = attempts+1;
        user.save();
        return response.status(401).json({message: DEFAULT_MESSAGE_INVALID_USER});
      }
      if (attempts > 0) {
        user.attempts = 0
      }
      const { algorithms, maxAge, secret } = jwtConfig;
      const token = jwt.sign({}, secret.toString(), { algorithm: algorithms[0], expiresIn: maxAge });

      user.token = token;
      user.save();

      return response.json({message: 'Logged success', token})
    }
    return response.status(401).json({message: DEFAULT_MESSAGE_INVALID_USER});
  }).catch(err => {
    return response.status(500).json({
      message: 'Internal error'
    })
  });
}

export const Encrypt = (value: string) => {
  return crypto.pbkdf2Sync(value, process.env.SECRET_JWT ?? 'ecopoints_secret_phrase', 1000, 64, 'sha512').toString('hex');
}
