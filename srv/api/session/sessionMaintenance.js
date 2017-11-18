const jwt = require('jsonwebtoken');
const AuthenticationError = require('../../errors').AuthenticationError;
const Session = require('../../models/Session');

module.exports = exports = async (req, res, next) => {

  const token = req.headers['x-access-token'];
  const secret = process.env.PASTE_JWT_SECRET;

  console.log('token', token);

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, secret);
  } catch(e) {
    decodedToken = null;
  }

  let session;
  try {
    session = await Session.findById(decodedToken).populate('_user');
    session = session.toObject();
  } catch (e) {
    session = null;
  }

  if(session) {
    delete session._user.password;
  }

  req.session = session;
  next();
};
