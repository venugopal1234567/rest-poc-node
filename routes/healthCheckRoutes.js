const express = require('express');
const router = express.Router();
const healthCheckController = require('../controller/healthCheckController');

router.get('/', healthCheckController.healthCheck);


module.exports = router;