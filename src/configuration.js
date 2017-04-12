import routes from './routes';
import middleware from './middleware';

class AppConfiguration {
  static run(app) {
    middleware(app);
    routes(app);
  }
}
export default AppConfiguration;
