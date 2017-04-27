class ErrorRouter {

  constructor(payload) {
    this.payload = payload;
  }

  init() {
    const { app, config, logger, StatusCodeError, createError } = this.payload;

    ErrorRouter.notFound(app, createError);
    ErrorRouter.end(app, config, logger, StatusCodeError);
  }

  static notFound(app, createError) {
    // catch 404 and forward to error handler
    app.use((req, res, next) => {
      // noinspection JSUnresolvedFunction
      next(new createError.NotFound());
    });
  }

  static end(app, config, logger, StatusCodeError) {
    // noinspection JSUnusedLocalSymbols
    // eslint-disable-next-line no-unused-vars
    app.use((err, req, res, next) => {
      const requestId = req.requestId;
      if (!(err instanceof Error)) {
        const response = err;
        logger.info('requestId', requestId, 'response', response);
        res.json(response);
        return;
      }

      const error = err;
      if (error instanceof StatusCodeError) {
        error.message = Object.values(error.error).join(', ');
      }
      const status = error.status || error.statusCode;
      const result = {
        error: {
          message: error.message,
          type: error.event || error.name || 'Unexpected Error',
          code: error.code || status || -1,
        },
      };
      if (config.dev) {
        result.error.extra = {
          name: error.name,
          detail: error.error || error.extra,
        };
      }
      res.status(status || 500);
      res.json(result);
      logger.error('requestId', requestId, 'error', result.error);
    });
  }
}

export default ErrorRouter;
