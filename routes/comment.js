const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const User = require("../models/user");
const Comment = require("../models/reply");

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Mentornity Ecosystem Mail",
    page: "Comment",
    user: req.user
  });
});
router.post("/:id", (req, res, next) => {
  Post.findOne({ _id: req.params.id }, (err, post) => {
    if (post.isRepliable) {
      newComment = new Comment({
        comment: req.body.comment,
        author: req.user.id
      });
      newComment.save();
      Post.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: newComment } },
        (err, post) => {}
      );
    } else {
      console.log("Bu post yorumlara kapalidir.");
    }
  });

  res.redirect("/post/" + req.params.id);
});
router.get("/delete/:id", (req, res, next) => {
  Comment.deleteOne(
    { _id: req.params.id, author: req.user.id },
    (err, comment) => {
      res.redirect("back");
    }
  );
});

module.exports = router;
