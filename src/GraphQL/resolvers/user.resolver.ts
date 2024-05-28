import Users from '@models/user';

export default {
  Query: {
    me: async (root: any, args: any, context: any) => {
      const { authorization } = context.headers
      const token = authorization.split(' ')[1]
      return Users.findOne({
        where: {
          token
        }
      })
    }
  }
}
