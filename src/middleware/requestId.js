import uuid from 'uuid';

const requestId = () => (req, res, next) => {
  req.requestId = uuid.v4();
  next();
};

export default requestId;
