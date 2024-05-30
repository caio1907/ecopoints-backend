import express from 'express';
import helmet from 'helmet';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { expressjwt as jwt } from 'express-jwt';
import schema from './GraphQL';
import { login } from './auth';
import { jwtConfig } from './token';

const app = express();
const port = process.env.PORT ?? 3333;

app.use(helmet());
app.disable('x-powered-by');
app.use(cors({origin: true, methods: 'POST', credentials: true}));

app.use(express.json());

app.post('/authenticate', login);

app.use(
  '/graphql',
  jwt(jwtConfig),
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.get('/', (req, res) => {
  res.redirect('https://ecopoints.caiolima.dev')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
