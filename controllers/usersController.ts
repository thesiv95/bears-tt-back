import { Request, Response, NextFunction } from 'express';
import * as MyResponse from '../utils/myResponse';
import { User } from '../db/dbTypes';
import dbQueryWrapper from '../db/dbQueryWrapper';

const usersFilter = (q: any) => {
	if (q.login && q.id) return ` WHERE login = "${q.login}" AND id = ${q.id}`;
	if (q.login) return ` WHERE login = "${q.login}"`;
	if (q.id) return ` WHERE id = ${q.id}`;
	return '';
}

export const getUsersHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const filter = usersFilter(req.query);
		const query = 'SELECT * FROM `users`' + filter;

		const data = await dbQueryWrapper(query) as User[];

		next(MyResponse.success(res, data));
	} catch (error) {
		next(MyResponse.failure(res, error));
	}
};

export const postUsersHandler = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const {
			login,
			password,
			first_name,
			last_name,
			balance
		} = req.body;

		const payload = {
			login,
			password,
			first_name,
			last_name,
			balance
		} as User;

		const query = `INSERT INTO \`users\` (\`login\`, \`password\`, \`first_name\`, \`last_name\`, \`balance\`) VALUES ("${login}", "${password}", "${first_name}", "${last_name}", ${balance})`;

		await dbQueryWrapper(query);
		next(MyResponse.success(res, payload, 201));

	} catch (error) {
		next(MyResponse.failure(res, error));
	}
};