const express = require('express');
const { registerpublisher, viewpublisher } = require('../controller/publisher.controller');

const router = express.Router();
router.use('/registerpublisher', registerpublisher);
router.use('/viewpublisher', viewpublisher);
module.exports = router;