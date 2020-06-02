const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
// require isLoggedIn module
const authorizations = require('../config/middleware/authorizations.js');

// PUT /trips/:tripId/comments/:commentId/likes
router.put(`/trips/:tripId/comments/:commentId/likes`, authorizations.isLoggedIn, commentsCtrl.updateLikes);
// POST /trips/:id/comments
router.post('/trips/:id/comments', authorizations.isLoggedIn, commentsCtrl.create);
// DELETE /comments/:id
router.delete('/comments/:id', authorizations.isLoggedIn, authorizations.isCommentCreator, commentsCtrl.delete)

module.exports = router; 