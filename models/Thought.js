const { Schema, model, Types } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    require: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    require: true,
    default: Date.now,
    // getter method to format the timestamp on query
  },
  author: {
    type: String,
    require: true,
  },
  //   reactions: {

  //   }
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
