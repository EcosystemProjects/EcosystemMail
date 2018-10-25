const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  reportedUser: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  reportedPost: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  reason: {
    type: String,
    required: true,
    default: "Spam"
  }
});

const Report = (module.exports = mongoose.model("Report", ReportSchema));
