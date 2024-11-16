const express = require('express');
const router = express.Router();

// Require
const postConctoller = require('../controllers/posts');

router.get('/', postConctoller.getAllPosts);

router.get('/:id', postConctoller.getPostByid);

router.post('/', postConctoller.createNewPost);

router.delete('/:id', postConctoller.deletePost);

module.exports = router;