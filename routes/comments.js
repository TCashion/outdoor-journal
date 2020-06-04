const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const authorizations = require('../config/middleware/authorizations.js');

router.put(`/trips/:tripId/comments/:commentId/likes`, authorizations.isLoggedIn, commentsCtrl.updateLikes);
router.post('/trips/:id/comments', authorizations.isLoggedIn, commentsCtrl.create);
router.delete('/comments/:id', authorizations.isLoggedIn, authorizations.isCommentCreator, commentsCtrl.delete)

module.exports = router; 