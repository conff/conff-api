import helmet from 'helmet';
// noinspection JSUnresolvedVariable
import validator from 'express-validator';
import requestId from './requestId';

export default (app) => {
  app.use(helmet());
  app.use(requestId());
  app.use(validator());
};
