'use strict';

const mongoose = require('mongoose');
mongoose.Promise = Promise;

const sessionSchema = mongoose.Schema({
  _id: String,
  _user: {
    type: String,
    ref: 'User'
  },
  isLoggedIn: Boolean
},{
  timestamps: true
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = exports = Session;
