const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
// require isLoggedIn module
const isLoggedIn = require('./modules/isloggedin');

/* GET user landing page */
router.get('/users', usersCtrl.index);


module.exports = router;
