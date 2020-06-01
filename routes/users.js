const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/* GET user landing page */
router.get('/users', usersCtrl.index);


module.exports = router;
