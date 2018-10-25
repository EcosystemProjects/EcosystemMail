const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var bcrypt = require("bcryptjs");
//Post And Question Schema Import
const Question = require("./question");
const Post = require("./post");
const Answer = require("./answer");
const Reply = require("./reply");
//User Schema
const UserSchema = new Schema({
  //LinkedIn Infos
  linkedinId: { type: String, required: true, unique: true },
  profileImage: { type: String, required: false, unique: false },
  formattedName: { type: String, required: true, unique: false },
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  linkedinUrl: { type: String, required: false, unique: true },
  industry: { type: String, required: false, unique: false },
  summary: { type: String, required: false, unique: false },
  headline: { type: String, required: false, unique: false },
  answeredQuestions: [
    {
      question: { type: String, required:false, unique:false},
      order: { type: Number, required:false, unique:false},
	  type: { type: String, required:false, unique:false}
    }
  ],

  // Inbox Infos
  inbox: [
    {
      _id: false,
      mail: { type: Schema.Types.ObjectId, ref: "Post" },
	  type: { type:String, require:true,unique:false },
      isReaded: { type: Boolean, require: true, unique: false, default: false }
    }
  ],
  blockedUsers: [
    {
      type: String,
    }
  ],
  // Helpers
  userCoin: { type: Number, required: true, default: 100 },
  postCount: { type: Number, default: 0 }, // This one will update when User Posted
  isCompleted: { type: Boolean, default: false }, // This one will Update when all questions are answered
  created_at: { type: Date, default: Date.now }
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.findUserCount = () => {
  User.find({}, (err, user) => {
    console.log(user.length);
  });
};
