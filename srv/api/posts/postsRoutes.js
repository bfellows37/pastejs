const express = require('express');
const router = express.Router();

const getPosts = require('./getPosts');
const getPost = require('./getPost');
const addPost = require('./addPost');

router.get('/',
  getPosts,
  (req,res) => {
    res.send(req.posts);
  });

router.get('/:postId',
  getPost,
  (req,res) => {
    res.send(req.post);
  });

router.post('/',
  addPost,
  (req,res) => {
    res.send(req.post);
  });

module.exports = exports = router;
