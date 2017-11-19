'use strict';

const Post = require('../../models/Post');

const getPosts = async (req,res,next) => {

  try {
    req.posts = await Post.find({isRoot: true})
      .populate('_user')
      .collation({locale: 'en'})
      .sort({updatedAt: 'desc'})
      .limit(100);

    next();
  } catch(error) {
    next(error);
  }
};

module.exports = exports = getPosts;
