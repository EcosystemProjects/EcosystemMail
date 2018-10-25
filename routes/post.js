const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const Comment = require("../models/reply");
const User = require("../models/user");
const Question = require("../models/question");

/* GET home page. */

router.get("/create", (req, res, next) => {
  Question.find({}, (err, question) => {});
});

router.post("/create", (req, res, next) => {
  const data = Object.entries(req.body);
  var isPrivate = false;
  var isRepliable = true;
  if (req.body.isPrivate === "true") {
    isPrivate = true;
  }
  if (req.body.isRepliable === "false") {
    isRepliable = false;
  }

  var newPost = new Post({
    body: req.body.body,
    title: req.body.title,
    tokencost: 1,
    isPrivate: isPrivate,
    isRepliable: isRepliable,
    postedUser: req.user._id
  });

  Post.create(newPost, (err, createdPost) => {
    var targetVar = [];
    var blockers = [];
    var k = 0;
    // Query for Target User Questions
    let questionAndAnswers = [];
    for (var i = 0; i < data.length; i++) {
      if (
        data[i][0] != "body" &&
        data[i][0] != "title" &&
        data[i][0] != "isRepliable" &&
        data[i][0] != "isPrivate"
      ) {
        let answer = `${data[i][1]}`;
        questionAndAnswers.push(answer);
      }
    }
    let query = { "answeredQuestions.answer": { $all: questionAndAnswers } };
    let update = {
      $push: {
        inbox: {
          mail: createdPost._id
        }
      }
    };
    // ================================================================================
    // Find Target Users and Push Created Post
    User.find(query, (err, targetUsers) => {
      for (ctr = 0; ctr < targetUsers.length; ctr++) {
        if (targetUsers[ctr].blockedUsers.length != 0) {
          for (ctr2 = 0; ctr2 < targetUsers[ctr].blockedUsers.length; ctr2++) {
            if (
              JSON.stringify(targetUsers[ctr].blockedUsers[ctr2].user._id) ===
              JSON.stringify(req.user._id)
            ) {
              blockers = JSON.stringify(targetUsers[ctr]._id);
            }
          }

          if (blockers.includes(JSON.stringify(targetUsers[ctr]._id))) {
          } else {
            targetVar = JSON.stringify(targetUsers[ctr]._id);
          }
        } else {
          targetVar = targetUsers[ctr]._id;
        }
      }
      console.log(targetVar);
      Post.update(
        { _id: createdPost._id },
        {
          $push: {
            recivers: { $each: targetVar }
          }
        },
        (err, result) => {}
      );
      User.updateMany(
        { _id: { $in: targetVar } },
        update,
        { upsert: true },
        (err, users) => {
          if (err) console.log(err);
          res.json(users);
        }
      );
    });
    // ==================================================================================
    // Update User Inbox
  });
});

router.get("/myPosts", (req, res, next) => {
  Post.find({}, (err, post) => {
    //İlk önce bütün postlar çekilir.
    Post.find({ postedUser: req.user._id }, (err, post) => {});
  });
});
router.get("/deletedPosts", (req, res, next) => {});
router.get("/archivedPosts", (req, res, next) => {});
router.get("/spamPosts", (req, res, next) => {});
router.post("/reply", (req, res, next) => {});
router.get("/edit/:id", (req, res) => {
  Post.findOne({ _id: req.params.id }, (err, post) => {});
});
router.get("/delete/:id", (req, res, next) => {
  Post.deleteOne(
    { _id: req.params.id, postedUser: req.user.id },
    (err, post) => {
      res.redirect("/post/myPosts");
    }
  );
});
router.post("/edit/:id", (req, res, next) => {
  var isPrivate = req.body.isPrivate;
  var isRepliable = req.body.isPrivate;
  if (req.body.isPrivate === "true") {
    isPrivate = true;
  } else {
    isPrivate = false;
  }
  if (req.body.isRepliable === "false") {
    isRepliable = false;
  } else {
    isRepliable = true;
  }
  Post.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        body: req.body.body,
        title: req.body.title,
        isPrivate: isPrivate,
        isRepliable: isRepliable
      }
    },
    (err, doc) => {
      res.redirect("/post/myPosts");
    }
  );
});
router.get("/:id", (req, res, next) => {
  var viewCount;
  Post.findOne({ _id: req.params.id })
    .populate("postedUser")
    .exec((err, post) => {
      viewCount = post.views;
      Comment.find({ _id: { $in: post.comments } }, (err, comment) => {
        viewCount = viewCount + 1;
        Post.findOneAndUpdate(
          { _id: req.params.id },
          { $set: { views: viewCount } },
          (err, post) => {}
        );
      });
    });
});
router.post("/update", (req, res, next) => {});
router.post("/share", (req, res, next) => {});
module.exports = router;
