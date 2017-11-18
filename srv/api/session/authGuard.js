const AuthenticationError = require('../../errors').AuthenticationError;

module.exports = exports = (req, res, next) => {
  if(!req.session) {
    next(new AuthenticationError('this route requires authentication'));
  } else {
    next();
  }
};
