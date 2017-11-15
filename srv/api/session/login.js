'use strict';

const User = require('../../models/User');
const AuthenticationError = require('../../errors').AuthenticationError;

const login = async (req,res,next) => {

  let foundUser;
  try {
    foundUser = await User.findOne({username: req.body.username});
  } catch(errorFindingUser) {
    next(errorFindingUser);
    return;
  }

  console.log(foundUser);
  if(!foundUser) {
    let createdUser;
    try {
      createdUser = User.create({username: req.body.username, password: req.body.password});
    } catch(errorCreatingUser) {
      next(errorCreatingUser);
      return;
    }
    req.userCreated = true;
    next();
  } else /* found a user with that username, check credentials */ {
    if(!(foundUser.password === req.body.password)) {
      next(new AuthenticationError('login failed'));
    } else {
      req.userAuthenticated = true;
      next();
    }
  }
};

module.exports = exports = login;
