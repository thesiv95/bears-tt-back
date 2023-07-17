import { Response } from 'express';
import logger from './logger';

export const success = (res: Response, data: any, code = 200) => {
	return res.status(code).send({
		isSuccess: true,
		data
	});
};

export const failure = (res: Response, err: any, code = 500) => {
	const errCasted = err as Error;
	logger.error(errCasted.stack);
	return res.status(code).send({
		isSuccess: false,
		message: errCasted.message,
		name: errCasted.name,
		stack: process.env.NODE_ENV === 'production' ? '[hidden on prod]' : errCasted.stack!
	});
};