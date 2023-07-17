import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connection from './db/connection';

dotenv.config();

connection.connect(function (err) {
	if (err) {
		console.error('DB - error connecting: ' + err.stack);
		return;
	}
	console.log('DB connected');
});

const app = express();
app.use(express.json());
app.use(cors());

const APP_PORT = process.env.APP_PORT || 7000;

app.get('/', (_req, res) => res.send({ status: 'running' }));

app.listen(APP_PORT, () => console.log(`App is listening on port ${APP_PORT}`));

