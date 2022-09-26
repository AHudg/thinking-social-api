const router = require("express").Router();
const {
  getAllUsers,
  getSpecificUser,
  addUser,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(addUser);

router.route("/:id").get(getSpecificUser);

module.exports = router;
