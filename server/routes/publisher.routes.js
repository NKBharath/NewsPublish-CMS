const express = require('express');
const { registerpublisher } = require('../controller/publisher.controller');

const router = express.Router();
router.use('/registerpublisher', registerpublisher);

module.exports = router;