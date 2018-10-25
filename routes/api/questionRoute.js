const express = require("express");
const router = express.Router();
const passport = require("passport");
const Question = require("../../models/question");
const Category = require("../../models/categories");

/* GET Profile/edit Page. */
router.get("/", (req, res) => {
  Question.find((err, question) => {
    question = question.map(question => {
      return question;
    });
    res.json(question);
  }).populate("category").populate("answers");
});
router.get("/categories", (req, res) => {
  passport.authenticate("jwt", { session: false }),
    Category.find((err, category) => {
      res.json(category);
    }).populate("question");
});

router.get("/:id", (req, res) => {
  Question.find({ category: req.params.id })
    .populate("category")
    .populate("answers")
    .then(question => {
      res.json(question);
    });
});
module.exports = router;
