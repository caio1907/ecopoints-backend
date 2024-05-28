import Trash from "@models/trash";

export default {
  Query: {
    get: async (_: any, args: any) => {
      const { id } = args;
      const trash = await Trash.findByPk(id);
      if (trash) {
        return {
          id: trash.id,
          types: trash.types.split('\n')
        }
      }
    },
    getAll: async () => {
      const trashs = await Trash.findAll();
      return trashs.map((trash) => {
        return {
          id: trash.id,
          types: trash.types.split('\n')
        }
      })
    }
  },
  Mutation: {
    addTrash: async (_: any, args: any) => {
      const { trash } = args;
      trash.types = trash.types.join('\n');
      console.log(trash)
      const result = await Trash.create(trash);
      console.log(result);
      return {
        id: result.id,
        types: result.types.split('\n')
      }
    }
  }
}
