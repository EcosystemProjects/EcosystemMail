const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Question = require("../models/question");
const Category = require("../models/categories");

router.get("/", (req, res, next) => {
  Category.find({}, (err, categories) => {});
});

router.post("/add-category", (req, res, next) => {
  var newCategory = new Category({
    categoryNumber: req.body.categoryNumber
  });
  newCategory.category.en = req.body.category;
  newCategory.category.tr = req.body.categoryTr;
  newCategory.save().then(savedCategory => {
    res.json(savedCategory);
  });
  // Category.create(
  //   {
  //     categoryNumber: req.body.categoryNumber,
  //     category: [],
  //     question: null
  //   },
  //   (err, createdCategory) => {
  //     createdCategory.category.push({
  //       en: req.body.category,
  //       tr: req.body.categoryTr
  //     });
  //     createdCategory.save((err, pushedCategory) => {
  //       console.log(pushedCategory);
  //       console.log(createdCategory);
  //       res.redirect("/env");
  //     });
  //   }
  // );
});

router.post("/add-question", (req, res, next) => {
  console.log(req.body);
  const answers = req.body.answers;
  const answersArray = answers.split(",");
  Question.create(
    {
      question: {
        en: req.body.question,
        tr: req.body.questionTr
      },
      coin: req.body.coin,
      category: req.body.category,
      answers: []
    },
    (err, createdQuestion) => {
      if (err) console.log(err);
      answersArray.forEach(data => {
        createdQuestion.answers.push(data);
      });

      createdQuestion.save((err, pushedQuestion) => {
        Category.findOne({ categoryNumber: 1 }).then(category => {
          category.question.unshift(pushedQuestion);
          category.save().then(savedCategory => {
            res.json(pushedQuestion);
          });
        });
      });
    }
  );
});

module.exports = router;
