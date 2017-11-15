const express = require('express');
const router = express.Router();

const postsRoutes= require('./posts/postsRoutes');
const sessionRoutes = require('./session/sessionRoutes');

router.use('/posts',postsRoutes);
router.use('/session', sessionRoutes);

module.exports = exports = router;
