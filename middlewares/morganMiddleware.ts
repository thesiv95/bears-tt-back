
import morgan from "morgan";
import logger from "../utils/logger";

const stream = {
  write: (message: string) => logger.info(message),
};

const skip = () => {
  return process.env.NODE_ENV === "test";
};

const morganMiddleware = morgan(
  ":remote-addr :method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);

export default morganMiddleware;