const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, minLength: 3, maxLength: 100 },
  email: {type: String, unique: true, },
  password: { type: String, required: true, minLength: 3, maxLength: 100 },
});


// Export model
module.exports = mongoose.model("User", UserSchema);
