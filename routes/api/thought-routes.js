const router = require("express").Router();
const {
  getThought,
  getSpecificThought,
  addThought,
  addReaction,
  editThought,
  deleteThought,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getThought).post(addThought);

router
  .route("/:id")
  .get(getSpecificThought)
  .put(editThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
