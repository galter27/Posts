const express = require('express');
const router = express.Router();

// Require the controller
const commentController = require('../controllers/comments');

// Define the routes
router.get('/', commentController.getAllComments);

router.get('/:id', commentController.getCommentsByPostId);

router.post('/', commentController.createNewComment);

router.delete('/:id', commentController.deleteComment);

router.put('/:id', commentController.deleteComment);

module.exports = router;
