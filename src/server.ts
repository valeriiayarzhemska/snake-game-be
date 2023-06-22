import express from 'express';
import cors from 'cors';
import { router as usersRouter } from './routes/usersRouter';
import { initDb } from './db/initDb';

const PORT = Number(process.env.PORT) || 4000;
const USERS_ENDPOINT = '/users';

const server = express();

server.use(cors());
server.use(express.static('public'));

initDb();

server.listen(PORT, '0.0.0.0', () => {
  global.console.log(`Server is running on PORT = ${PORT}`);
});

server.use(USERS_ENDPOINT, express.json(), usersRouter);
