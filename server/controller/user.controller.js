const userModel = require('../models/user.model');

//* CREATE (회원가입)
const createUser = async (req, res, next) => {
  try {
    const getUser = await userModel.findOne({ userId: req.body.userId });
    if (!getUser) {
      const createUser = await userModel.create(req.body);
      res.status(201).json(createUser);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

//* CHECK ID (아이디 중복확인)
const checkUserId = async (req, res, next) => {
  try {
    const getUser = await userModel.findOne({ userId: req.body.userId });
    if (getUser) {
      res.sendStatus(404);
    } else {
      res.status(200).json({ checkId: false });
    }
  } catch (e) {
    next(e);
  }
};

//* LOGIN (로그인)
const loginUser = async (req, res, next) => {
  try {
    const getUser = await userModel.findOne({ userId: req.body.userId });
    const getLoginUser = await userModel.findOne({ userId: req.body.userId, userPw: req.body.userPw });
    if (getLoginUser) {
      //todo: 세션, 쿠키 생성 (express-session 사용할것)
      res.status(200).json({ userId: getLoginUser.userId, userName: getUser.userName });
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

//* LOGOUT (로그아웃) 쿠키뿌시기!!

module.exports = {
  createUser,
  loginUser,
  checkUserId,
};
