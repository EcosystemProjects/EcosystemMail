const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/user");
const Question = require("../../models/question");
const Category = require("../../models/categories");
const Answer = require("../../models/answer");
router.get("/", (req, res, next) => {
  Category.find({}, (err, categories) => {});
});

router.post("/add-category", (req, res, next) => {
  const data = Object.entries(req.body);
  var languages = [];
  var newCategory = new Category({
    categoryNumber: req.body.categoryNumber,
    question: [],
    categoryName: []
  });
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] !== "categoryNumber") {
      if (data[i][0].indexOf("category") + 1) {
        newCategory.categoryName.push({
          lang: data[i][0].substring(8),
          text: data[i][1]
        });
      }
    }
  }
  newCategory.save().then(savedCategory => {
    res.json(savedCategory);
  });
});

router.post("/add-question", (req, res, next) => {
  const data = Object.entries(req.body);
  var questions = [];
  newQuestion = new Question({
    type: req.body.type,
    question: [],
    answers: [],
    coin: req.body.coin,
    key: req.body.key
  });
  if (req.body.type === "number") {
    for (var i = 0; i < data.length; i++) {
      if (
        data[i][0] !== "coin" &&
        data[i][0] !== "categoryNumber" &&
        data[i][0] !== "type"
      ) {
        if (data[i][0].indexOf("question") + 1) {
          newQuestion.question.push({
            lang: data[i][0].substring(8),
            text: data[i][1]
          });
        } else if (data[i][0].indexOf("number") + 1) {
          if (data[i][0].indexOf("Start") + 1) {
            newQuestion.forNumbers.start = data[i][1];
          }
          if (data[i][0].indexOf("End") + 1) {
            newQuestion.forNumbers.end = data[i][1];
          }
        }
      }
    }
	newQuestion.key = 0;
  } else if (req.body.type === "selectOne") {
    for (var i = 0; i < data.length; i++) {
      if (
        data[i][0] !== "coin" &&
        data[i][0] !== "categoryNumber" &&
        data[i][0] !== "type"
      ) {
        if (data[i][0].indexOf("question") + 1) {
          newQuestion.question.push({
            lang: data[i][0].substring(8),
            text: data[i][1]
          });
        } else if (data[i][0].indexOf("answers") + 1) {
          ans = data[i][1];
          answers = ans.split(",");
          for (var x = 0; x < answers.length; x++) {
            newAnswer = new Answer({
              question: newQuestion.id
            });
            newAnswer.answer.lang = data[i][0].substring(7);
			newAnswer.answer.key = 0;
            newAnswer.answer.info = answers[x];
			newAnswer.answer.order = x;
            newAnswer.save();
            newQuestion.answers.push(newAnswer);
          }
        }
      }
    }
	newQuestion.key = 0;
  } else if (req.body.type === "linked") {
    for (var i = 0; i < data.length; i++) {
      if (
        data[i][0] !== "coin" &&
        data[i][0] !== "categoryNumber" &&
        data[i][0] !== "type" &&
        data[i][0] !== "key"
      ) {
        if (data[i][0].indexOf("question") + 1) {
          newQuestion.question.push({
            lang: data[i][0].substring(8),
            text: data[i][1]
          });
        } else if (data[i][0].indexOf("answers") + 1) {
          ans = data[i][1];
          answers = ans.split(",");
          keys = [];

          for (var x = 0; x < answers.length; x++) {
            newAnswer = new Answer({
              question: newQuestion.id,
              answer: {}
            });
            newAnswer.answer.lang = data[i][0].substring(7);
            answerBody = answers[x].split(".");
            newAnswer.answer.key = answerBody[1];
            newAnswer.answer.info = answerBody[0];
			newAnswer.answer.order = x;

            newAnswer.save();
            newQuestion.answers.push(newAnswer);
          }
        }
      }
    }
    newQuestion.key = req.body.key;
  }
  Category.findOne({ categoryNumber: req.body.categoryNumber }).then(
    category => {
      newQuestion.category = category._id;
      newQuestion.save().then(savedQuestion => {
        res.json(savedQuestion);
      });
    }
  );
});

module.exports = router;
