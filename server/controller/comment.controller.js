const commentModel = require('../models/comment.model');

//* CREATE (댓글 생성)
const createComment = async (req, res, next) => {
  try {
    const setComment = await commentModel.create(req.body);
    res.status(200).json(setComment);
  } catch (e) {
    next(e);
  }
};

//* READ (댓글 표출)
const getComment = async (req, res, next) => {
  try {
    const matchComment = await commentModel.find({ postId: req.body.postId });
    if (matchComment) {
      res.status(200).json(matchComment);
    } else {
      res.status(404).json({ message: '결과값이 없습니다.' });
    }
  } catch (e) {
    next(e);
  }
};

//* DELETE (댓글 삭제)
const deleteComment = async (req, res, next) => {
  try {
    const deleteComment = await commentModel.findByIdAndDelete(req.body._id);
    if (deleteComment) {
      res.status(200).json(deleteComment);
    } else {
      res.status(404).json({ message: '결과값이 없습니다.' });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createComment,
  getComment,
  deleteComment,
};
