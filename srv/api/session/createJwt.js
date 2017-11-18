const User = require('../../models/User');
const AuthenticationError = require('../../errors').AuthenticationError;
const bcrypt = require('bcrypt');

const saltRounds = 10;

const authenticate = async (req,res,next) => {

  let foundUser;
  try {
    foundUser = await User.findOne({username: req.body.username});
  } catch(errorFindingUser) {
    next(errorFindingUser);
    return;
  }

  if(!foundUser) {
    let hash;
    try{
      hash = await bcrypt.hash(req.body.password, saltRounds);
    } catch(errorCreatingHash) {
      next(errorCreatingHash);
      return;
    }

    let createdUser;
    try {
      createdUser = await User.create({username: req.body.username, password: hash});
    } catch(errorCreatingUser) {
      next(errorCreatingUser);
      return;
    }
    req.userCreated = true;
    req.createdUser = createdUser;
    next();
  } else /* found a user with that username, check credentials */ {
    if(!bcrypt.compare(req.body.password, foundUser.password)) {
      next(new AuthenticationError('login failed'));
    } else {
      req.userAuthenticated = true;
      req.foundUser = foundUser;
      next();
    }
  }
};


const Session = require('../../models/Session');
const jwt = require('jsonwebtoken');
const generateId = require('../../models/helpers/generateId');

const createJwt = async (req,res,next) => {

  if(req.createdUser || req.foundUser) {

    const sessionId = generateId();
    let session;
    const sessionUser = req.createdUser || req.foundUser;

    try {
      session = await Session.create({
        _id: sessionId,
        _user: sessionUser._id
      });
    } catch(e) {
      next(new AuthenticationError('session not created'));
      return;
    }

    const secret = process.env.PASTE_JWT_SECRET;
    req.authToken = jwt.sign(session._id,secret,{algorithm: 'HS256'});
    next();
  }
};

module.exports = exports = [authenticate,createJwt];
