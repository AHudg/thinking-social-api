const { Schema, model } = require("mongoose");

// create the User schema
// Schemas map to a MongoDB collection and defines the shape
// of the documents within that collection
const userSchema = new Schema({
  username: {
    type: String,
    //unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    //unique: true,
    //must match a valid email address (Mongoose's matching validation)
  },
  //   thoughts: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "thought",
  //     },
  //   ],
  //   friends: [
  //     {
  //       type: Schema.Types.ObjectId,
  //       ref: "user",
  //     },
  //   ],
});

// create a virtual here that retrieves the length of the user's friends array field on query
// userSchema
// .virtual('friendsCount');

// initializes our User model
const User = model("user", userSchema);

module.exports = User;
