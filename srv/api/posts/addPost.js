'use strict';

const Post = require('../../models/Post');

const addPost = async (req,res,next) => {


  let constructedTree;
  if(req.body.post.parent){
    let parentPost;
    try {
      parentPost = await Post.findOne({_id: req.body.post.parent});

      constructedTree = {
        ancestors: parentPost.tree.ancestors.push(parentPost._id),
        parent: parentPost._id
      }
    } catch(error) {
      return next(error);
    }
  } else {
    constructedTree = {
      ancestors: []
    }
  }

  const post = {
    content: req.body.post.content,
    tree: constructedTree
  };

  try {
    req.post = await Post.create(post);
    next();
  } catch(error) {
    return next(error);
  }
};

module.exports = exports = addPost;
