import winston from 'winston';

let INSTANCE: winston.Logger;
export function getLogger(): winston.Logger {
  if (INSTANCE === undefined) {
    INSTANCE = winston.createLogger({
      level: 'debug',
      transports: [new winston.transports.Console()],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.splat(),
        winston.format.simple(),
      ),
    });
  }
  return INSTANCE;
}
