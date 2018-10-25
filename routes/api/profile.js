const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const Question = require("../../models/question");
const Answer = require("../../models/answer");
const keys = require("../../helpers/keys");

const db = require("mongodb");
const mongoose = require("mongoose");

router.get("/user/:id",passport.authenticate("jwt", { session: false }),(req, res) => {
	User.findById(req.params.id).then(user => {
		res.json(user);
	});
});

router.post("/block/:id",passport.authenticate("jwt", { session: false }),(req, res) => {
	if (req.user.id === req.params.id) {
		res.status(400).send.json({ blockerror: "You can not block yourself!" });
	}
	else {
		User.update({ _id: req.user.id },{ $push: { user: req.params.id } },(err, user) => {
			res.json(req.user);
		});
	}
});

router.post("/inbox/:id",passport.authenticate("jwt", { session: false }),(req, res) => {
	User.findOne({ _id: req.user._id }).populate("inbox.mail").then(user => {
		const data = {
			box : user.inbox.filter(p=> p.type === req.params.id).sort((p,k) => p.mail.date < k.mail.date),
			unread:{
				inbox : user.inbox.filter(function(p){if(p.type === "inbox" &&  p.isReaded === false)return p;}).length,
				archive : user.inbox.filter(function(p){if(p.type === "archive" &&  p.isReaded === false)return p;}).length,
				trash : user.inbox.filter(function(p){if(p.type === "trash" &&  p.isReaded === false)return p;}).length
			}
		}
		res.json(data);
	})
});

router.get("/",passport.authenticate("jwt", { session: false }),(req, res) => {
	User.findOne({ _id: req.user.id }, (err, user) => {
		res.json({
			answeredQuestions: user.answeredQuestions,
			formattedName: user.formattedName,
			lastName: user.lastName,
			email: user.email,
			linkedinId: user.linkedinId,
			industry: user.industry,
			summary: user.summary,
			userCoin: user.userCoin,
			headline: user.headline,
			profileImage: user.profileImage,
			isCompleted: user.isCompleted,
			unread:{
				inbox : user.inbox.filter(function(p){if(p.type === "inbox" &&  p.isReaded === false)return p;}).length,
				archive : user.inbox.filter(function(p){if(p.type === "archive" &&  p.isReaded === false)return p;}).length,
				trash : user.inbox.filter(function(p){if(p.type === "trash" &&  p.isReaded === false)return p;}).length
			}
		})
	});
});

router.post("/save_post",passport.authenticate("jwt", { session: false }),(req, res) => {
	const data = req.body.data;
	const page = req.body.page;
	
	let part = req.body.change_status;
	
	
	User.findOne({ _id: req.user.id }).populate("inbox.mail").then(user => {
		if(page === "trash" && part === "trash")
			part = "trash-deleted";
		
		for(let i = 0; i<data.length; i++){
			if(data[i].state === "true"){
				let ind = user.inbox.findIndex(p=> String(p.mail._id) === data[i].id);
				if(ind !== -1)
					user.inbox[ind].type = part;
			}
		}
		
		user.save().then(saved =>{
				const _data = {
					box : user.inbox.filter(p=> p.type === page).sort((p,k) => p.mail.date < k.mail.date),
					unread:{
						inbox : user.inbox.filter(function(p){if(p.type === "inbox" &&  p.isReaded === false)return p;}).length,
						archive : user.inbox.filter(function(p){if(p.type === "archive" &&  p.isReaded === false)return p;}).length,
						trash : user.inbox.filter(function(p){if(p.type === "trash" &&  p.isReaded === false)return p;}).length
					}
				}
				console.log(_data);
				res.json(_data);
		});
	});
	
});

router.post("/save",passport.authenticate("jwt", { session: false }),(req, res) => {
	const data = req.body.quests;
		
	User.findOne({ _id: req.user.id }).then(user => {
		user.answeredQuestions.splice(0);
		if(!user.isCompleted)
			user.isCompleted = true;
		user.userCoin = req.body.coins
		
		if(data !== undefined){
			for (var i = 0; i < data.length; i++) {
				let q_id = data[i]._id;
				let answer_id = parseInt(data[i].answer);
				let _type = data[i].type;
				if(!isNaN(answer_id)){
					user.answeredQuestions.push({
						question: q_id,
						order: answer_id,
						type:_type
					});
				}
			}
		}
		user.save().then(saved=>{
			const payload = {
				id: saved.id,
				linkedinId: saved.linkedinId,
				formattedName: saved.formattedName,
				email: saved.email,
				profileImage: saved.profileImage,
				isCompleted : saved.isCompleted
			};
			jwt.sign(payload,keys.secretOrKey,{ expiresIn: 3600 },(err, token) => {
				res.json({
					success: true,
					token: "Bearer " + token
				});
			});
		});
	});
});

module.exports = router;
