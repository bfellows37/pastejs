'use strict';

const mongoose = require('mongoose');
mongoose.Promise = Promise;

const userSchema = mongoose.Schema({
  username: String,
  password: String
},{
  timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = exports = User;
