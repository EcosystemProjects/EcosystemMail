const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Question = require("../models/question");
const db = require("mongodb");

router.get("/:id", (req, res, next) => {
  let isSame = false;
  if (req.params.id === req.user.id) {
    isSame = true;
    User.findOne({ _id: req.params.id }, (err, user) => {});
  } else {
    User.findOne({ _id: req.params.id }, (err, user) => {});
  }
});

router.get("/block/:id", (req, res, next) => {
  if (req.user.id === req.params.id) {
  } else {
    User.update(
      { _id: req.user.id },
      { $push: { blockedUsers: { user: req.params.id } } },
      (err, user) => {}
    );
  }
});
module.exports = router;
