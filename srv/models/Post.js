'use strict';

const mongoose = require('mongoose');
mongoose.Promise = Promise;

const mongoMask = require('./helpers/mongoMask');

const postSchema = mongoose.Schema({
  _id: {
    type: String
  },
  _user: {
    type: String,
    ref: 'User'
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  replyTo: {
    type: String,
    ref: 'Post'
  },
  parent: {
    type: String,
    ref: 'Post'
  },
  path: {
    type: String
  },
  user: {
    type: String,
    ref: 'User'
  },
  isRoot: {
    type: Boolean
  }
},{
  timestamps: true,
  toObject: {transform: mongoMask}
});

const Post = mongoose.model('Post', postSchema);

module.exports = exports = Post;
