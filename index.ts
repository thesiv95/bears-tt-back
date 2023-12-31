import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import dbInit from './db/dbInit';
import usersRouter from './routers/usersRouter';
import winnersRouter from './routers/winnersRouter';
import morganMiddleware from './middlewares/morganMiddleware';
import logger from './utils/logger';
dotenv.config();

dbInit();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morganMiddleware);

app.use('/users', usersRouter);
app.use('/winners', winnersRouter);

const APP_PORT = process.env.APP_PORT || 7000;

app.get('/', (_req, res) => res.send({ status: 'running' }));

app.listen(APP_PORT, () => logger.info(`App is listening on port ${APP_PORT}`));

