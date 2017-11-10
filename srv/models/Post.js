'use strict';

const mongoose = require('mongoose');
mongoose.Promise = Promise;

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
  timestamps: true
});

postSchema.statics.generateId = () => {
  let date = new Date();
  return date.getTime().toString(16);
};

const Post = mongoose.model('Post', postSchema);

module.exports = exports = Post;
