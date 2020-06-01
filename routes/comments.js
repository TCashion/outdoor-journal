const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
// require isLoggedIn module
const isLoggedIn = require('./modules/isloggedin');

// POST /trips/:id/comments
router.post('/trips/:id/comments', isLoggedIn, commentsCtrl.create);


module.exports = router; 