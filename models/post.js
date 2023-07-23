const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon")


const PostSchema = new Schema({
  title: { type: String, required: true, minLength: 3 },
  subtitle: { type: String, required: true, minLength: 3 },
  summary: { type: String },
  text: { type: String, required: true },
  imgsrc: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  responses: [{ type: Schema.Types.ObjectId, ref: "Response"}],
  tags: [{type: String}],
  category: { type: Schema.Types.ObjectId, ref: "Category"},
  likes: { type: Number, default: 0 },
  status: { type: String, enum: ['draft', 'published'], default: 'draft' }
});

PostSchema.virtual("timestamp_formatted").get(function(){
  return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATETIME_SHORT)
})

// Virtual for post's URL
PostSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/posts/${this._id}`;
  });

// Export model
module.exports = mongoose.model("Message", MessageSchema);
