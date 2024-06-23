import Users from '@models/user';
import { pbkdf2Sync } from 'crypto';

const cryptPassword = (password: string) => {
  const { SECRET_JWT } = process.env;
  return pbkdf2Sync(password, SECRET_JWT ?? 'ecopoints_secret_phrase', 1000, 64, 'sha512').toString('hex');
}

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

      const hasUser = await Users.findOne({where: {email: user.email}});
      if (hasUser) {
        throw new Error("User was registered");
      }

      const { SECRET_JWT } = process.env;
      user.password = cryptPassword(user.password);
      return await Users.create(user);
    },
    updateUser: async (_:any, args: any) => {
      const { user } = args;

      if (user.password) {
        user.password = cryptPassword(user.password);
      }

      await Users.update(
        user,
        {
          where: {
            id: user.id
          }
        }
      );

      return Users.findByPk(user.id);
    }
  }
}
