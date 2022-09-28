const router = require("express").Router();
const {
  getAllUsers,
  getSpecificUser,
  addUser,
  addFriend,
  editUser,
  deleteUser,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getSpecificUser).put(editUser).delete(deleteUser);

// /api/users/:userId/friends/:friendsId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
