import Users from '@models/user';
import { pbkdf2Sync } from 'crypto';

export default {
  Query: {
    me: async (_: any, args: any, context: any) => {
      const { authorization } = context;
      return Users.findOne({
        where: {
          token: authorization
        }
      })
    }
  },
  Mutation: {
    createUser: async (_: any, args: any) => {
      const { user } = args;
      const { SECRET_JWT } = process.env;
      user.password = pbkdf2Sync(user.password, SECRET_JWT ?? 'ecopoints_secret_phrase', 1000, 64, 'sha512').toString('hex');
      return await Users.create(user);
    }
  }
}
