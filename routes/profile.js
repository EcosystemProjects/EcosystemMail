const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Question = require("../models/question");
//Middlewares

/* GET Profile Page. */
router.get("/profile", function(req, res, next) {});

/* GET Profile/edit Page. */
router.get("/profile/edit", function(req, res, next) {
  Question.find({}, (err, question) => {});
});

router.post("/profile/edit", function(req, res, next) {
  const data = Object.entries(req.body);
  let answerArray = [];
  for (var i = 0; i < data.length; i++) {
    answerArray.push([data[i][0], data[i][1]]);
  }

  //Remove exist Questions and Answer
  User.update(
    { _id: req.user._id },
    {
      $set: {
        answeredQuestions: []
      }
    },
    (err, result) => {
      for (var i = 0; i < answerArray.length; i++) {
        console.log(answerArray[i][0]);
        User.update(
          { _id: req.user._id },
          {
            $push: {
              answeredQuestions: {
                question: answerArray[i][0],
                answer: answerArray[i][1]
              }
            }
          },
          { upsert: true },
          (err, result) => {
            console.log(result);
          }
        );
      }
      res.redirect("/profile");
    }
  );
});

module.exports = router;
