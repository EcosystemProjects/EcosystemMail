const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");
const Report=require("./report");
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const PostSchema = new Schema({
  postedUser: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  name: { type: String },
  profileImage: {
    type: String
  },
  subject: { type: String, required: true, unique: false },
  subjectText:{type:String, required: true, unique: false},
  message: { type: String, required: true, unique: false },
  messageText: { type: String, required: true, unique: false },
  date: { type: Date, required: true, unique: false, default: new Date()},

  //Replies
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      text: {
        type: String,
        required: true
      },
      name: { type: String },
      profileImage: { type: String },
      date: { type: Date, default: new Date() }
    }
  ],
  reports: {
    type: Schema.Types.ObjectId,
    ref: "Reports",
    required: false
  },
  status:{
  	type:String,
  	default:"Live"
  },
  //Booleans
  isPublic: { type: Boolean, required: true, unique: false, default: false },
  isPublicReply: {type: Boolean, required: true, unique: false, default: true},
  isDraft: {type: Boolean, required: true, unique: false, default: false},
  //Counters
  tokenCost: { type: Number, required: true, unique: false },
  views: { type: Number, required: true, unique: false, default: 0 },

  //Target Group
  receivers: [
    {
      question: { type:Schema.Types.ObjectId, ref:"Question"},
      order: { type: Number, required:false, unique:false}
    }
  ]
});
const Post = (module.exports = mongoose.model("Post", PostSchema));
PostSchema.plugin(deepPopulate /* more on options below */);

module.exports.getPostByPostId = (postId, callback) => {};

module.exports.getPostsByUserId = (userId, callback) => {};
module.exports.getPostsByhedef = (hedef, callback) => {};
module.exports.getPostsByDate = (date, callback) => {};
module.exports.updateViewsByPostId = (postId, callback) => {};
module.exports.updateTargetbyPostId = (postId, callback) => {};
module.exports.updateToPrivateByPostId = (postId, callback) => {};
module.exports.updateToPublicByBostId = (postId, callback) => {};
module.exports.updateToNotRepliableByPostId = (postId, callback) => {};
module.exports.updateToNotRepliableByPostId = (postId, callback) => {};
module.exports.updateToDeletedByPostId = (postId, callback) => {};
module.exports.updateToNotDeletedByPostId = (postId, callback) => {};
module.exports.updateToArchivedByPostId = (postId, callback) => {};
module.exports.updateToSpamByPostId = (postId, callback) => {};
module.exports.updateToNotSpamByPostId = (postId, callback) => {};
module.exports.updateToDraftByPostId = (postId, callback) => {};
module.exports.permanentDeleteByPostId = (postId, callback) => {};
module.exports.ReplyByPostId = (postId, callback) => {};
module.exports.addComment = (postId, callback) => {};
