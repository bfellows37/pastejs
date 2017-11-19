'use strict';

const Post = require('../../models/Post');

const getReplies = async (req,res,next) => {

  try {
    req.replies = await Post.find({replyTo : req.params.replyTo, isRoot : false})
      .populate('_user')
      .collation({locale: 'en'})
      .sort({path:'asc'});

    next();
  } catch(error) {
    next(error);
  }
};

module.exports = exports = getReplies;
