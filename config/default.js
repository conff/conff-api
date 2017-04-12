const env = process.env;

module.exports = {
  port: env.PORT || 7000,
  dev: env.NODE_ENV === 'development',
};
