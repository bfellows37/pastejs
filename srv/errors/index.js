'use strict';

class AuthenticationError extends Error {

  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
    this.message = message;
    this.httpStatusCode = 401;
  }
}

module.exports = exports = {
  AuthenticationError,
};
