const express = require('express');
const { registeruser, loginuser } = require('../controller/auth-controller');

const router = express.Router();

router.use('/register',registeruser);
router.use('/login', loginuser);
module.exports = router;