class GDGRouter {
  constructor(payload, router, path) {
    this.app = payload.app;
    this.path = path;
    this.router = router;
  }

  init() {
    this.router.get('/', GDGRouter.list());
    this.router.post('/:id', GDGRouter.select());
    this.app.use(this.path, this.router);
  }

  static list() {
    return (req, res, next) => {
      next([]);
    };
  }

  static select() {
    return (req, res, next) => {
      next(true);
    };
  }
}

export default GDGRouter;
