class GDGRouter {
  constructor(payload, router, path) {
    Object.assign(this, {
      ...payload,
      path,
      router,
      GDG: payload.mongoose.model('GDG'),
    });
  }

  init() {
    this.router.get('/', this.list());
    this.router.get('/:id', this.get());
    this.app.use(this.path, this.router);
  }

  list() {
    return async (req, res, next) => {
      const { GDG } = this;
      next(await GDG.find().exec());
    };
  }

  get() {
    return async (req, res, next) => {
      const { GDG } = this;
      const { id } = req.params;
      next(await GDG.findById(id).exec());
    };
  }
}

export default GDGRouter;
