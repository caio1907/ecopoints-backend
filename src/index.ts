import express from 'express';
import helmet from 'helmet';
import { createHandler } from 'graphql-http/lib/use/express';
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

app.post('/auth', login);

app.use(
  '/graphql',
  jwt(jwtConfig),
  createHandler({
    schema,
    context: req => ({authorization: req.raw.headers.authorization?.split(' ')?.[1]}),
  })
);

app.get('/', (req, res) => {
  res.redirect('https://ecopoints.caiolima.dev')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
