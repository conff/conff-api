import config from 'config';
import express from 'express';
import log4js from 'log4js';

import AppConfiguration from './configuration';

const logger = log4js.getLogger();
const app = express();

const onExit = (err) => {
  logger.fatal(err);
  process.exit(1);
};

process.on('uncaughtException', onExit);
process.on('unhandledRejection', onExit);

AppConfiguration.run(app);

if (!config.test) {
  app.listen(config.port, () => {
    if (config.dev) {
      logger.info('Server configuration:', config);
    } else {
      logger.info('Server listening on', config.port);
    }
  });
}

export default app;
