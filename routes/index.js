const express = require("express");
const router = express.Router();
const Post = require("../models/post");
//Middlewares

const User = require("../models/user");


/* GET home page. */
router.get("/", function(req, res, next) {
  //Post.find({ isPrivate: false }, (err, post) => {
    //İlk önce bütün postlar çekilir.
    //Post.find({ isPrivate: true }, (err, private) => {});
  //});
  res.json("")
});
/* GET About page. */
router.get("/about", function(req, res, next) {
  res.send('<h1> About Page <h1> <a href="/"> Index </a>');
});

/* GET Contact page. */
router.get("/contact", function(req, res, next) {
  res.send('<h1> Contact Page <h1> <a href="/"> Index </a>');
});

module.exports = router;
