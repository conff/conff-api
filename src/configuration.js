import config from 'config';
import * as fs from 'fs';
import * as _ from 'lodash';
import logWith from 'log-with';
import mongoose from 'mongoose';
import * as path from 'path';
import MongooseUtil from './core/mongoose';
import middleware from './middleware';
import routes from './routes';

const logger = logWith(module);

class AppConfiguration {
  static async run(app) {
    const mongooseUtil = new MongooseUtil(config, {
      _,
      fs,
      path,
      mongoose,
      logger,
    });
    await mongooseUtil.init(path.resolve('./src/models'));
    middleware(app);
    routes(app);
  }
}
export default AppConfiguration;
