const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const Post = require("../models/post");
router.get("/", passport.authenticate("jwt", { session: false }),function(req, res, next) {
  User.findOne({_id:req.user.id})
    .populate("inbox.mail")
    .then(user => {
      res.json(user.inbox);
    });
});

module.exports = router;
