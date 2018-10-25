const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  contact: {
    email: { type: String, required: true },
    linkedin: { type: String, required: true },
    instagram: { type: String, required: false },
    facebook: { type: String, required: false },
    twitter: { type: String, required: false }
  }
});

const Institution = (module.exports = mongoose.model(
  "Institution",
  InstitutionSchema
));
