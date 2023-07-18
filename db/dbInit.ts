import logger from '../utils/logger';
import connection from './dbConnection';
const createQueries = [
	'CREATE TABLE IF NOT EXISTS `users` ( `id` INT NOT NULL AUTO_INCREMENT, `login` VARCHAR(50) NOT NULL , `password` VARCHAR(100) NOT NULL ,  `first_name` VARCHAR(50) NOT NULL , `last_name` VARCHAR(50) NOT NULL , `balance` INT NOT NULL DEFAULT 0, PRIMARY KEY (`id`))',
	'CREATE TABLE  IF NOT EXISTS `winners` ( `id` INT NOT NULL AUTO_INCREMENT , `user_id` INT NOT NULL , `score` INT NOT NULL DEFAULT 0, `is_jackpot` INT NOT NULL DEFAULT 0, `win_date` DATE NOT NULL , PRIMARY KEY (`id`),  FOREIGN KEY (`user_id`)  REFERENCES users (`id`))'
];

const dbInit = () => {
	try {
		connection.connect(function (err) {
			if (err) {
				logger.error('DB - error connecting: ' + err.stack);
				return;
			}
			logger.info('DB connected');
		});
		
		connection.query(createQueries[0], function (error) {
			if (error) throw error;
		});
		
		connection.query(createQueries[1], function (error) {
			if (error) throw error;
		});
	} catch (err) {
		const errCasted = err as Error;
		logger.error('DB - error connecting: ' + errCasted.stack);
	}
};

export default dbInit;