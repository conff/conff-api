const env = process.env;

module.exports = {
  port: env.PORT || 7000,
  dev: env.NODE_ENV === 'development',
  mongo: {
    uri: 'mongodb://localhost',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1,
        },
      },
      replset: {
        socketOptions: {
          keepAlive: 1,
        },
      },
    },
  },
};
