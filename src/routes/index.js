import config from 'config';
import { Router } from 'express';
import log4js from 'log4js';
import mongoose from 'mongoose';
import createError from 'http-errors';
import { StatusCodeError } from 'request-promise-native/errors';

import GDGRouter from './gdg';
import ErrorRouter from './error';

const logger = log4js.getLogger();

export default (app) => {
  const payload = {
    app,
    config,
    logger,
    createError,
    StatusCodeError,
    mongoose,
  };
  const gdgRouter = new GDGRouter(payload, new Router(), '/gdg');
  const errRouter = new ErrorRouter(payload);

  gdgRouter.init();
  errRouter.init();
};
