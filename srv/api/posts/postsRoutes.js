const express = require('express');
const router = express.Router();

const getPosts = require('./getPosts');
const getPost = require('./getReplies');
const addPost = require('./addPost');

router.get('/',
  getPosts,
  (req,res) => {
    res.send(req.posts);
  });

router.get('/replies/:replyTo',
  getPost,
  (req,res) => {
    res.send(req.replies);
  });

router.post('/',
  addPost,
  (req,res) => {
    res.send(req.post);
  });

module.exports = exports = router;
