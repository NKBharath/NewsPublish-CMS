const express = require('express');
const { registerpublisher, viewpublisher, deletepublisher } = require('../controller/publisher.controller');

const router = express.Router();
router.use('/registerpublisher', registerpublisher);
router.use('/viewpublisher', viewpublisher);
router.use('/deletepublisher/:id', deletepublisher);
module.exports = router;