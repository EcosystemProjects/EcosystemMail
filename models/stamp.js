const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StampSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Institution"
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  purchasedBy: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      amount: {
        type: Number,
        required: true
      },
      date: {
        type: Date,
        required: true,
        default: Date.now
      }
    }
  ]
});

const Stamp = (module.exports = mongoose.model("Stamp", StampSchema));
