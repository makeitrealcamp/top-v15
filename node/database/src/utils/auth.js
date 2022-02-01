const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  // receive token
  const { authorization } = req.headers // Authorization

  if (!authorization) {
    res.status(401).json({ message: 'Su sesión expiró' });
    return;
  }

  // const token = authorization // 'asdfasdf.dsafasdf.asdfasd'
  const token = authorization.split(' ')[1] // 'Bearer asdfsdfasd.asdfasdf.asdfasdf'
  // if bearer token
  if (!token) { // 'Bearer '
    res.status(401).json({ message: 'Su sesión expiró' });
    return;
  }

  // if token exists
  // validate token/decode
  const { id } = jwt.verify(token, process.env.SECRET);

  // pass to next middleware/controller with current user
  req.userId = id;
  next();
}
