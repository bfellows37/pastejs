'use strict';

const Post = require('../../models/Post');
// const generateId = require('time-uuid');

let iterator = 100;

const addPost = async (req,res,next) => {

  const postId = Post.generateId();
  let parentPost;

  if(!req.body.replyTo) {
    try {
      req.post = await Post.create({
        _id: postId,
        replyTo: postId,
        content: req.body.post.content,
        parent: null,
        isRoot: true,
        path: postId
      });
      next();
    } catch(e) {
      next(new Error('Root post was not created.'));
    }

  } else {
    try {
      parentPost = await Post.findOne({_id: req.body.replyTo});
    } catch(e) {
      return next(new Error('Reply was not created'));
    }

    try {
      req.post = await Post.create({
        _id: postId,
        replyTo: parentPost.replyTo,
        content: req.body.post.content,
        parent: parentPost._id,
        isRoot: false,
        path: `${parentPost.path}.${postId}`
      });
      next();
    } catch(e) {
      next(new Error('Reply was not created.'));
    }

  }

  /*
  Update the root post in the board with the current time so that it will bump to top
  Called after next because I don't want to delay the response for this to happen
  and because Javascript will happily do this.
  */
  if(req.body.replyTo) {
    let rootPost;
    try {
       rootPost = await Post.findById(parentPost.replyTo);
       rootPost.updatedAt = new Date();
       rootPost.save();
    } catch(e) {
      next(e);
    }
  }
};

module.exports = exports = addPost;
