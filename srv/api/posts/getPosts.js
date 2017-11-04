'use strict';

const Post = require('../../models/Post');

const getPosts = async (req,res,next) => {

  try {
    req.posts = await Post.find({},{});
    next();
  } catch(error) {
    next(error);
  }
};

module.exports = exports = getPosts;
