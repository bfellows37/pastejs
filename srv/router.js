const express = require('express');
const router = express.Router();

const apiRoutes = require('./api/apiRoutes');

router.use('/api',apiRoutes);

module.exports = exports = router;
