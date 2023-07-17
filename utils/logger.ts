import winston from 'winston';
import { resolve as pathResolve } from 'path';

const logDir = pathResolve(__dirname, '..', 'logs');

const logFormat = winston.format.printf((info: any) => {
  const { timestamp } = info.metadata;
  return `${timestamp} ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.metadata(),
    winston.format.errors({ stack: true }),
    logFormat,
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `${logDir}/error.log`, level: 'error' }),
    new winston.transports.File({ filename: `${logDir}/app.log` }),
  ],
});

export default logger;