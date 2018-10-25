const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = require("./question");

const AnswerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  },
  answer: {
    _id: false,
    lang: { type: String, required: true },

    key: { type: String, required: true },
    info: { type: String, required: true },
    order: { type: Number, required: true }
  }
});

const Answer = (module.exports = mongoose.model("Answer", AnswerSchema));
