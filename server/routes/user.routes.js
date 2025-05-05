const express = require('express');
const { viewuser } = require('../controller/user.controller');

const router = express.Router();

router.use('/viewuser', viewuser);

module.exports = router;