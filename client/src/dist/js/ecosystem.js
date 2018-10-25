import {findCssClassStyle,findParentBySelector} from './functions.js';

//window.addEventListener("resize",setScrollSize);

window.onload = function(){
	setReplyButtons();
	setViewReplyButtons();
	setReplies();
	//setStepSelectChecks();
	//setScrollSize();
}

//function setStepPages(){
	//setScrollSize();
//	setStepSelectChecks();
//}

function setReplyButtons(){
var rep_buttons = document.getElementsByClassName("reply-button-reply");
	for(var i = 0; i<rep_buttons.length; i++){
		rep_buttons[i].addEventListener("click",function(){
			var reply = findParentBySelector(this, ".reply-container");
			var replies = reply.querySelectorAll(".reply-container .reply-form-container");
			if(this.getAttribute("aria-checked") === "false"){
				for(var k = 0; k< replies.length; k++){
					replies[k].style.display = "block";
				}
				this.setAttribute("aria-checked","true");
			}
			else{
				for(var t = 0; t< replies.length; t++){
					replies[t].style.display = "none";
				}
				this.setAttribute("aria-checked","false");
			}
		});
	}
}

function setViewReplyButtons(){
	var view_rep_buttons = document.getElementsByClassName("view-reply-button");
	for(var i = 0; i<view_rep_buttons.length; i++){
		view_rep_buttons[i].addEventListener("click",function(){
			//var reply = this.parentNode.parentNode.parentNode;
			var reply = findParentBySelector(this, ".reply-container");
			var replies = reply.querySelectorAll(".reply-container .reply-container");
			if(this.getAttribute("aria-checked") === "false"){
				for(var k = 0; k< replies.length; k++){
					replies[k].style.display = "flex";
				}
				this.setAttribute("aria-checked","true");
			}
			else{
				for(var j = 0; j< replies.length; j++){
					replies[j].style.display = "none";
				}
				this.setAttribute("aria-checked","false");
			}
		});
	}
}

function setReplies(){
	var rep = document.getElementsByClassName("reply-container");
	
	for(var i = 0; i<rep.length; i++)
	{
		var x = rep[i].querySelectorAll(".reply-container .reply-container");
		console.log("Reply : "+x+ " Reply Length : "+x.length);
		if(x.length >= 1){
			for(var k = 0; k< x.length; k++){
				x[k].style.display = "none";
			}
		}
		else{
			var show_button = rep[i].getElementsByClassName("view-reply-button");
			show_button[0].style.display = "none";
		}
		
		var reply_form = rep[i].getElementsByClassName("reply-form-container");
			reply_form[0].style.display = "none";
	}
}

/*function setStepSelectChecks(){
	var selects = document.getElementsByClassName("step-select");
	for(var i = 0; i<selects.length; i++)
		selects[i].addEventListener("change",function(){
				var parent = findParentBySelector(this,".flex-order");
				var param = parent.querySelectorAll(".flex-order .info-container div .token");
				if(param.length){
					if(this.value !== "Select")
						param[0].classList.add("icon-check-mark");
					else
					param[0].classList.remove("icon-check-mark");
				}
		});
}

function setScrollSize()
{	
	var scr = document.getElementsByClassName("scroll-container");
	for(var i = 0; i<scr.length; i++)
	{
		
		var heightSize = window.innerHeight;
		var topnavSize = findCssClassStyle("topnav","height");

		if(scr[i].getAttribute('aria-labelledby') === "step-scroll"){
			var hrSize = findCssClassStyle("half-right-inner","padding-top");
			scr[i].style.height = heightSize - (topnavSize +(hrSize*2)) + "px";
		}
			
		else if(scr[i].getAttribute('aria-labelledby') === "mail-scroll"){
			var popupSize = findCssClassStyle("popup-inner","padding-top");
			var ibxSize = findCssClassStyle("inbox-menu","height");
			scr[i].style.height = heightSize - (topnavSize +(popupSize*2)+ibxSize) + "px";
		}
		else if(scr[i].getAttribute('aria-labelledby') === "left-scroll"){
			scr[i].style.height = heightSize - (topnavSize) + "px";
		}
		
		else if(scr[i].getAttribute('aria-labelledby') === "mailbox-scroll"){
			var pop = findCssClassStyle("popup-inner","padding-top");
			scr[i].style.height = heightSize - (topnavSize +(pop*2)) + "px";
		}
	}	
}*/
