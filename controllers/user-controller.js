const { response } = require("express");
const { User, Thought } = require("../models");
const { param } = require("../routes/api/user-routes");

const userController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-_id -__v",
      })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  getSpecificUser({ params }, res) {
    User.findOne({ _id: params.id })
      .populate({
        path: "thoughts",
        select: "-_id -__v",
      })
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  addUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { runValidators: true, new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  editUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  deleteUser({ params }, res) {
    User.findByIdAndDelete({ _id: params.id })
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: "No user found with this id." })
          : Thought.deleteMany({ _id: { $in: dbUserData.thoughts } })
      )
      .then(() =>
        res.json({ message: "User and associated thoughts deleted!" })
      )
      .catch((err) => res.status(400).json(err));
  },

  deleteFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { runValidators: true, new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};

module.exports = userController;
