const express = require('express');
const { viewuser, deleteuser } = require('../controller/user.controller');

const router = express.Router();

router.use('/viewuser', viewuser);
router.use('/deleteuser/:id', deleteuser);

module.exports = router;