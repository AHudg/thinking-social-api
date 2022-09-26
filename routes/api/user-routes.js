const router = require("express").Router();
const {
  getAllUsers,
  getSpecificUser,
  addUser,
  editUser,
  deleteUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getSpecificUser).put(editUser).delete(deleteUser);

module.exports = router;
