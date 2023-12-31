const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true, minLength: 2, maxLength: 100 },
});

// Virtual for bookinstance's URL
CategorySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
// UPDATE
  //   return `/posts/category/${this._id}`;
});

// Export model
module.exports = mongoose.model("Category", CategorySchema);
