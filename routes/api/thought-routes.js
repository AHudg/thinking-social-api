const router = require("express").Router();
const {
  getThought,
  getSpecificThought,
  addThought,
  editThought,
  deleteThoguht,
} = require("../../controllers/thought-controller");

router.route("/").get(getThought).post(addThought);

router
  .route("/:id")
  .get(getSpecificThought)
  .put(editThought)
  .delete(deleteThoguht);

module.exports = router;
