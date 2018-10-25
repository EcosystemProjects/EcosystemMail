const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Category = require("./categories");
const Answer = require("./answer");
const QuestionSchema = new Schema({
  type: { type: String },
  question: [
    {
      _id: false,
      lang: { type: String, required: true },
      text: { type: String, required: true }
    }
  ],
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  coin: { type: Number, required: true },
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer"
    }
  ],
  forNumbers: {
    start: { type: Number },
    end: { type: Number }
  },
  key: {
    type: String
  }
});

const Question = (module.exports = mongoose.model("Question", QuestionSchema));
