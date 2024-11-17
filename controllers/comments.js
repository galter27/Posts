const Comment = require('../models/comments');

const getAllComments = async (req, res) => {
    const postId = req.query.postId;
    try {
        if (postId) {
            const comments = await Comment.find({ postId });
            res.status(200).send(comments);
        } else {
            const comments = await Comment.find();
            res.status(200).send(comments);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createNewComment = async (req, res) => {
    const { postId, sender, content } = req.body;
    try {
        const latestComment = await Comment.findOne().sort({ commentId: -1 });
        const nextCommentId = latestComment ? latestComment.commentId + 1 : 1;
        
        const newComment = new Comment({ postId, sender, content, commentId: nextCommentId });
        await newComment.save();
        res.status(201).send(newComment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteComment = async (req, res) => {
    const commentId = req.params.id;
    try {
        const result = await Comment.deleteOne({ commentId });
        if (result.deletedCount === 0) {
            return res.status(404).send('Comment not found');
        }
        res.status(202).send({ message: `Comment ${commentId} deleted successfully` });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    getAllComments,
    createNewComment,
    deleteComment
};
