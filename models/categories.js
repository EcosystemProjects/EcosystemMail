const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Question = require("./question");
const User = require("./user");

const CategorySchema = new Schema({
  categoryNumber: { type: Number, required: true, unique: true },
  categoryName: [
    {
      _id: false,
      lang: { type: String, required: true },
      text: { type: String, required: true },
    }
  ]
});

const Category = (module.exports = mongoose.model("Category", CategorySchema));
