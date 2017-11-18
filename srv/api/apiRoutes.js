const express = require('express');
const router = express.Router();

const sessionMaintenance = require('./session/sessionMaintenance');
const authGuard = require('./session/authGuard');
const postsRoutes= require('./posts/postsRoutes');
const sessionRoutes = require('./session/sessionRoutes');

router.use(sessionMaintenance);
router.use('/session', sessionRoutes);
router.use('/posts',[authGuard,postsRoutes]);

router.use((error,req,res,next) => {
  res.status(error.httpStatusCode || 400).send(error.message);
});

module.exports = exports = router;
