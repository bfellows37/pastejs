'use strict';

const Post = require('../../models/Post');

const getPost = async (req,res,next) => {

  try {
    req.post = await Post.find({_id: req.params.postId},{});
    next();
  } catch(error) {
    next(error);
  }
};

module.exports = exports = getPost;
