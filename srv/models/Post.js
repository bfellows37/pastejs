'use strict';

const mongoose = require('mongoose');
mongoose.Promise = Promise;

const postSchema = mongoose.Schema({
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  tree: {
    ancestors: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Post'
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  }
},{
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = exports = Post;
