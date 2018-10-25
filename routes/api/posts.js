const express = require("express");
const router = express.Router();
const Post = require("../../models/post");
const User = require("../../models/user");
const passport = require("passport");
const validatePostInput = require("../../validation/post");
const pepiMail = require("../../pepi-post/pepi");
const jwt = require("jsonwebtoken");

router.post("/",passport.authenticate("jwt", { session: false}),(req, res, next) => {
	const { errors, isValid } = validatePostInput(req.body);
	
	const currentUserId = req.user._id;
	const currentUserName = req.user.formattedName;
	const currentUserProfilPic = req.user.profileImage;
	const currentDate = new Date();
	
	const send = req.body.send;
	
	const newPost = new Post ({
			postedUser: currentUserId,
			name: currentUserName,
			profileImage: currentUserProfilPic,
			subject: req.body.subject,
			subjectText:req.body.subject_text,
			message: req.body.message,
			messageText:req.body.message_text,
			date: currentDate,
			tokenCost: req.body.cost,
			isPublic: req.body.isPublic,
			isPublicReply: req.body.isPublicReply,
			receivers:req.body.receivers
		})
	
	if(send){
		// Check Validation
		if(!isValid) {
			//if any errors, send 400 with errors object
			return res.status(400).json(errors);
		}
		// Create Post
		newPost.isDraft = false;
		
		Post.create(newPost).then(saved=> {
			const data = req.body.receivers;
		
			const getReciversFromBody = [];
		
			for(var i = 0; i<data.length; i++)
				getReciversFromBody.push({$elemMatch :data[i]})
		
			User.find({answeredQuestions : {$all:getReciversFromBody},_id: {$not:{$eq: currentUserId}},blockedUsers: {$ne: currentUserId}})
			.then(user=>{
				for(var i = 0; i<user.length; i++){
					let email = user[i].email;
					let subject = saved.subject;
					let fromName = currentUserName;
					let content = 
					`
					You Have Recived Mail From ${fromName}!

					<a href="wwww.foo.com/${saved.id}> ${subject} </a>
					`
					pepiMail.createMailForEcosystem(email, fromName, subject, content);
					user[i].inbox.push({mail:saved,type:"inbox"});
					user[i].save();
				}
			})
		
			User.findOne({_id: req.user._id}).then(user => {
				user.userCoin = user.userCoin - req.body.cost;
				user.inbox.push({isReaded:true, mail:saved,type:"sent"});
				user.save();
				res.json(saved);
			})
		
		});
	}
	else{
		newPost.isDraft = true;
		
		Post.create(newPost).then(saved=> {
			User.findOne({_id: req.user._id}).then(user => {
				user.userCoin = user.userCoin - req.body.cost;
				user.inbox.push({isReaded:true, mail:saved,type:"draft"});
				user.save();
				res.json(saved);
			})
		});
	}
});

// Get Recivers
router.post("/get-recivers",passport.authenticate("jwt", { session: false}),(req, res, next) => {
	const data = req.body;
	const currentUserId = req.user._id;
	const getReciversFromBody = [];
	const getRecivers = [];
	const blockedUser = [];
	const blockedByUsers = [];
//var x = [{$elemMatch : {question:1234abcd,order:0}},  {$elemMatch:{question:1234abcd,order:1}}]
	for(var i = 0; i<data.length; i++)
		getReciversFromBody.push({$elemMatch :data[i]})

	if(getReciversFromBody.length === 0){
		User.find({
			_id: {$not:{$eq: currentUserId}},
			blockedUsers: {$ne: currentUserId} }, (err, result) => {
				if(err){ 
					console.log(err)
					res.json(err)
				}
				else{
					let resultCount = result.length;
					let coinPrice = resultCount * 0.5;
					let data = {
						userCount : resultCount,
						cost : coinPrice
					}
					res.json(data)
				}
			}
		)
	}
	else{
		User.find({
			answeredQuestions : {$all:getReciversFromBody},
			_id: {$not:{$eq: currentUserId}},
			blockedUsers: {$ne: currentUserId} }, (err, result) => {
				if(err){ 
					console.log(err)
					res.json(err)
				}
				else{
					let resultCount = result.length;
					let coinPrice = resultCount * 0.5;
					let data = {
						userCount : resultCount,
						cost : coinPrice
					}
					res.json(data)
				}
			}
		)
	}
})

router.get("/public", (req, res) => {
	Post.find({ isPublic: true }).sort({ date: -1 }).then(posts => res.json(posts)).catch(err => res.status(404).json({ nopostsfound: "No posts found" }));
});

// @route   GET api/posts
// @desc    Get public posts
// @access  Public

router.get("/all", (req, res) => {
	Post.find({ isDraft:false }).populate("postedUser").sort({ date: -1 }).then(posts => res.json(posts)).catch(err => res.status(404).json({ err }));
});

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private



// @route   POST api/posts/comment/:id
// @desc    Add comment to post
// @access  Private

router.post("/comment",passport.authenticate("jwt", { session: false }),(req, res) => {
	
	const postID = req.body.postID;
	const text = req.body.text;
	Post.findById(postID).then(post => {
		const newComment = {
			text: text,
			name: req.user.formattedName,
			profileImage: req.user.profileImage,
			user: req.user.id,
			date: new Date()
		};

		// Add to comments array
		if(post.isPublicReply)
			post.comments.unshift(newComment);

		// Save
		post.save().then(post => res.json(post.comments));
	}).catch(err => res.status(404).json({ postnotfound: "No post found" }));
});

// @route   DELETE api/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private

router.delete("/comment/:id/:comment_id",passport.authenticate("jwt", { session: false }),(req, res) => {
	Post.findById(req.params.id).then(post => {
		// Check to see if comment exists
		if (post.comments.filter(comment => comment._id.toString() === req.params.comment_id).length === 0)
			return res.status(404).json({ commentnotexists: "Comment does not exist" });

		// Get remove index
		const removeIndex = post.comments.map(item => item._id.toString()).indexOf(req.params.comment_id);

		if (post.comments[removeIndex].user.toString() !== req.user.id) {
			return res.status(401).json({ notauthorized: "User not authorized" });
		}
		// Splice comment out of array
		post.comments.splice(removeIndex, 1);

		post.save().then(post => res.json(post));
	}).catch(err => res.status(404).json({ postnotfound: "No post found" }));
});

router.delete("/:id",passport.authenticate("jwt", { session: false }),(req, res, next) => {
	Post.findById(req.params.id).then(post => {
		// Check for post owner
		if (post.postedUser.toString() !== req.user.id) {
			return res.status(401).json({ notauthorized: "User not authorized" });
		}
		// Delete
		post.remove().then(() => res.json({ success: true }));
	}).catch(err => res.status(404).json({ postnotfound: "No post found" }));
});

router.get("/:id", (req, res) => {
	let token = req.headers.authorization;
	
	Post.findById(req.params.id).populate("receivers.question").deepPopulate("receivers.question.answers").then(post =>{
			if(token !== undefined){
				token = token.replace("Bearer ","");
				var decoded = jwt.verify(token, "secret");
				User.findOne({_id:decoded.id},(err,user) => {
					if(err){ 
						console.log(err)
						res.json(err);
					}
					else{
						if(user.inbox.find(function(p){if(String(p.mail) === req.params.id &&  p.isReaded === false && p.type !== "sent")return p;}) !== undefined ){
							user.inbox.find(function(p){if(String(p.mail) === req.params.id &&  p.isReaded === false && p.type !== "sent")return p;}).isReaded = true;
							
							//console.log(user.inbox.find(function(p){if(String(p.mail) === req.params.id &&  p.isReaded === false && p.type !== "sent")return p;}));
							user.save();
						}
						
						
					}
				});
			}

		
			res.json(post);
		}).catch(err =>res.status(404).json({ nopostfound: "No post found with that ID" }));
});

module.exports = router;
