const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  author: { type: String, required: true, minLength: 3, maxLength: 100 },
  text: { type: String, required: true, minLength: 3, maxLength: 500 },
  likes: { type: Number, default: 0 },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  responses: [{ type: Schema.Types.ObjectId, ref: "Response"}],
});


// Export model
module.exports = mongoose.model("Response", ResponseSchema);
