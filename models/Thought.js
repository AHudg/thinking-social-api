const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    require: true,
    maxLength: 280,
  },
  username: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //getter to timestamp on query
  },
});

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
  username: {
    type: String,
    require: true,
  },
  //   reactions: {

  //   }
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
