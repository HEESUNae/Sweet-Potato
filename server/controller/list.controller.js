const listModel = require('../models/list.model');

//* CREATE (리스트 생성)
const createList = async (req, res, next) => {
  try {
    const setList = await listModel.create(req.body);
    res.status(200).json(setList);
  } catch (e) {
    next(e);
  }
};

//* READ (전체 리스트 표출)
const getList = async (req, res, next) => {
  try {
    const allList = await listModel.find({});
    res.status(200).json(allList);
  } catch (e) {
    next(e);
  }
};

//* UPDATE (리스트 수정)
const updateList = async (req, res, next) => {
  try {
    const updateList = await listModel.findByIdAndUpdate(req.body._id, req.body, { new: true });
    if (updateList) {
      res.status(200).json(updateList);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

//* DELETE (리스트 삭제)
const deleteList = async (req, res, next) => {
  try {
    const deleteList = await listModel.findByIdAndDelete(req.body._id);
    if (deleteList) {
      res.status(200).json(deleteList);
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createList,
  getList,
  updateList,
  deleteList,
};
