import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, './schemas/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, './resolvers/*.resolver.*'));

const mergedTypeDefs = mergeTypeDefs(typesArray);

const mergedResolvers = mergeResolvers(resolversArray);

export default makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});
