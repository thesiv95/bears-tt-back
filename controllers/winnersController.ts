import { Request, Response, NextFunction } from 'express';
import * as MyResponse from '../utils/myResponse';
import { Winner } from '../db/dbTypes';
import dbQueryWrapper from '../db/dbQueryWrapper';

const getLimit = (q: any) => {
	return q.limit ? `LIMIT ${q.limit}` : 'LIMIT 4';
}

export const getWinnersHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const limit = getLimit(req.query);
		const query = 'SELECT * FROM `winners` ORDER BY score DESC ' + limit;

		const data = await dbQueryWrapper(query) as Winner[];

		next(MyResponse.success(res, data));
	} catch (error) {
		next(MyResponse.failure(res, error));
	}
};

export const getJackpot = (_req: Request, res: Response, next: NextFunction) => {
	try {
		const randomJackpot = Math.floor(Math.random() * 1000);
		next(MyResponse.success(res, {randomJackpot}));
	} catch (error) {
		next(MyResponse.failure(res, error));
	}

}

export const postWinnersHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const {
			user_id,
			score,
			is_jackpot,
			win_date
		} = req.body;

		const payload = {
			user_id,
			score,
			is_jackpot: Boolean(is_jackpot) ? 1 : 0,
			win_date
		} as Winner;

		const query = `INSERT INTO \`winners\` (\`user_id\`, \`score\`, \`is_jackpot\`, \`win_date\`) VALUES ("${user_id}", "${score}", ${is_jackpot}, "${win_date}")`;

		await dbQueryWrapper(query);
		next(MyResponse.success(res, payload, 201));

	} catch (error) {
		next(MyResponse.failure(res, error));
	}
};