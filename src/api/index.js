import express from 'express';
import cors from 'cors';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import config, { DEV } from '@config';
import { logger, errorHandler } from '@middlewares/express';
import routers from './routers';

const api = express();

api
  .set('etag', !DEV)
  .set('json spaces', 2)
  .disable('x-powered-by')
  .use(logger.http())
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true, limit: '10mb' }))
  .use(hpp()) // after parsed body
  .use(cookieParser(config['SECRET_KEY']))
  .use(`/api/${config['API_VERSION']}`, routers);

// mount error handler middleware last
api.use(errorHandler({ json: true }));

export default api;
