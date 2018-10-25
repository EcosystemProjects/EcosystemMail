const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../helpers/keys");

// User Model
const User = require("../models/user");

// Login
router.post("/login", function(req, res, next) {
  User.findOne({
    linkedinId: req.body.linkedinId
  }).then(user => {
    if (!user) {
      profileImage = req.body.profileImage;
      if( typeof profileImage === "undefined" || !profileImage){
        profileImage = "default";
      }
      newUser = new User({
        linkedinId: req.body.linkedinId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        formattedName: req.body.formattedName,
        email: req.body.email,
        linkedinUrl: req.body.linkedinUrl,
        industry: req.body.industry,
        summary: req.body.summary,
        profileImage: this.profileImage,
        headline: req.body.headline
      });
      newUser.save().then(saved => {
        const payload = {
          id: saved.id,
          // linkedinId: saved.linkedinId,
          // firstName: saved.firstName,
          // lastName: saved.lastName,
          formattedName: saved.formattedName,
          email: saved.email,
          // linkedinUrl: saved.linkedinUrl,
          // industry: saved.industry,
          // summary: saved.summary,
          profileImage: saved.profileImage
          // headline: saved.headline
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      });
    } else {
      const payload = {
        id: user.id,
        // linkedinId: user.linkedinId,
        // firstName: user.firstName,
        // lastName: user.lastName,
        formattedName: user.formattedName,
        email: user.email,
        // linkedinUrl: user.linkedinUrl,
        // industry: user.industry,
        // summary: user.summary,
        profileImage: user.profileImage,
        // headline: user.headline
		isCompleted:user.isCompleted
      };
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token
        });
      });
    }
  });
});

// Logout
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      linkedinId: req.user.linkedinId,
      formattedName: req.user.formattedName,
      email: req.user.email
    });
  }
);

module.exports = router;
