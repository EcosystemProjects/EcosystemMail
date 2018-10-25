const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../models/user");
const Post = require("../../models/post");
const Question = require("../../models/question");
const Category = require("../../models/categories");
const Answer = require("../../models/answer");


router.post("/public", (req, res, next) => {
 var word=req.body.keyword;
 Post.find({$or:[{subjectText : new RegExp(word, 'i')},{messageText : new RegExp(word, 'i')}],isPublic:true}, function(err, words){
               if (err) {response.send(err);}
               res.json(words)
            });
});
router.post("/all", (req, res, next) => {
 var word=req.body.keyword;
 Post.find({$or:[{subjectText : new RegExp(word, 'i')},{messageText : new RegExp(word, 'i')}]}, function(err, words){
               if (err) {response.send(err);}
               res.json(words)
            });
});
module.exports = router;
