const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
// require isLoggedIn module
const authorizations = require('./modules/authorizations');

// POST /trips/:id/comments
router.post('/trips/:id/comments', authorizations.isLoggedIn, commentsCtrl.create);


module.exports = router; 