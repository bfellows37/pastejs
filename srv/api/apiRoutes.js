const express = require('express');
const router = express.Router();

const postsRoutes= require('./posts/postsRoutes');

router.use('/posts',postsRoutes);

module.exports = exports = router;
