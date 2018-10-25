import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { GetLang,GetLangCode } from "./dist/js/languages.js";
import {findCssClassStyle,setDate} from './dist/js/functions.js';

import { getCurrentProfile } from "./dist/actions/profileActions";
import { logoutUser } from "./dist/actions/authActions";
import { getPost,addComment } from "./dist/actions/postActions";

import isEmpty from "./dist/validation/is-empty.js";

import Spinner from "./Spinner";
import Roller from "./Roller";
//import SpinnerSmall from "./Spinner-small";
import {LeftMenu} from './dist/components/mail/LeftMenu.js';
import {TopBanner} from './dist/components/mail/TopBanner.js';

class Content extends React.Component{
	
	state = {
		user:"",
		coins:0,
		picture:0,
		lang : new GetLang(),
		link:"",
		mail:{},
		unread:{}
	};
	
	componentWillMount(){
		if(!this.checkAuthority())
			this.props.history.push("/");
		else{
			if (this.props.auth.isAuthenticated){
				this.props.getCurrentProfile();
			}
			
			this.getMailFromLink();
			
		}
	}

	componentDidMount(){
		window.addEventListener("resize", this.handleResize);
		window.addEventListener("scroll", this.handleResize);
	}

	componentDidUpdate(prevProps){
		this.handleResize();
	}

	componentWillUpdate(nextProps,nextState){
	}

	componentWillReceiveProps(nextProps){
		this.setState({mail:nextProps.post.post})
		if(isEmpty(this.props.profile.profile)){
			console.log("Content -- Profile boş--WillReceive");
			this.setState({
				user:nextProps.profile.profile.formattedName,
				coins:nextProps.profile.profile.userCoin,
				picture:nextProps.profile.profile.profileImage,
				unread:nextProps.profile.unread
			});
		}
	}

	componentWillUnmount(){
		window.removeEventListener("resize", this.handleResize);
		window.removeEventListener("scroll", this.handleResize);
	}

	handleResize(){
		
		var scr = document.getElementsByClassName("scroll-container");
		for(var i = 0; i<scr.length; i++){
		
			var heightSize = window.innerHeight;
			var topnavSize = findCssClassStyle("topnav","height");
			
			if(scr[i].getAttribute('aria-labelledby') === "left-scroll"){
				scr[i].style.height = heightSize - (topnavSize) + "px";
			}
		
			else if(scr[i].getAttribute('aria-labelledby') === "mailbox-scroll"){
				var pop = findCssClassStyle("popup-inner","padding-top");
				scr[i].style.height = heightSize - (topnavSize +(pop*2)) + "px";
			}
		}
	}

	checkAuthority(){
		let pathName = this.props.location.pathname.split("/")[2];
		if(pathName === undefined)
			return false;
		
		return true;
	}

	getMailFromLink(){
		let mailID = this.props.location.pathname.split("/")[2];
		this.setState({link:mailID});
		this.props.getPost(mailID);
	}

	getMailHeader(){
		let header = this.state.mail.subject;
		
		return {__html: header}
	}

	getMailContent(){
		let message = this.state.mail.message;
		
		return {__html: message}
	}

	setRecipients(data){
		let _lang = GetLangCode();
		let _order = data.order;
		
		let type = data.question.question.find(p=> p.lang === _lang).text;
		let name;
		if(data.question.type === "selectOne"){
			name = data.question.answers.filter(p=> p.answer.lang === _lang).find(k=> k.answer.order === _order).answer.info;
		}
		else if(data.question.type === "number"){
		}
		return(
			<div className="recipients">
				<div className="recipient-type">{type}</div>
				<div className="recipient-name">{name}</div>
			</div>
		);
	}

	/*TAMAMLANMAMIŞ KISIM*/
	/*<div className="reply-button-container">
						<div>
							<button className="reply-button-reply" aria-checked="false">{this.state.lang.buttons.reply}</button>
						</div>
						<button className="view-reply-button" aria-checked="false" role="button">{this.state.lang.view_all}</button>
					</div>
					<div className="reply-form-container">
						<form className="reply-form">
							<textarea className="reply-textarea" placeholder={this.state.lang.your_rep}></textarea>
							<div className="reply-form-button">
								<button className="reply-button icon-reload-thin">{this.state.lang.buttons.reply}</button>
							</div>
						</form>
					</div>*/

	setReplies(_data){
		return(
			<div className="reply-container">
				<div className="reply-img-container"><img className="user-picture" src={_data.profileImage} alt="reply"/></div>
				<div style={{width:"100%"}}>
					<div className="reply-upper">
						<div className="reply-sender"><p>{_data.name}</p></div>
						<div className="reply-date">{setDate(_data.date)}</div>
						<div className="reply-report"><button>{this.state.lang.buttons.report}</button></div>
					</div>
					<div className="reply-message">{_data.text}</div>
					
				</div>
			</div>
		);
	}

	setComments(){
		if(!this.state.mail.isPublicReply)
			return(<div></div>);
		else if(this.props.post.comment){
			return(<div style={{display:"flex",justifyContent:"center"}}><Roller/></div>);
		}
		else{
			return(
				<div className="reply-form-container">
					<div className="reply-form">
						<textarea id="new_reply" className="reply-textarea" placeholder={this.state.lang.your_rep}></textarea>
						<div className="reply-form-button">
							<button className="reply-button icon-reload-thin" onClick={()=> this.sendCommentButton()}>{this.state.lang.buttons.reply}</button>
						</div>
					</div>
				</div>
			);
		}
	}

	setWarn(){
		if (isEmpty(this.props.profile.profile))
			return(<div className="reply-warning-container">{this.state.lang.leave_comment}</div>);
		else if(this.state.mail.isPublicReply)
			return(<div className="reply-warning-container">{this.state.lang.reply_warn}</div>);
		else
			return(<div className="reply-warning-container">{this.state.lang.comments}</div>);
	}

	sendCommentButton(){
		let d = document;
		
		let comment = d.getElementById("new_reply").value;
		
		const data = {
			postID : this.state.link,
			text: comment
		}
		
		console.log(data);
		this.props.addComment(data);
	}

	logoutButton = () =>{
		this.props.logoutUser();
		this.props.history.push("/");
	}

	settingsButton = () =>{
		this.props.history.push("/settings");
	}

	leftMenuButtons = res =>{
		//this.props.setResponseReload();
		this.props.history.push("/mail/"+res);
	}

	createButton = () =>{
		window.location.replace("/new_mail");
		//this.props.history.push("/new_mail");
	}

	spamButton(){
		const data = {
			change_status:"spam",
			//data : this.state.check_mails,
			//page: this.state.current_page
		}
		console.log(data);
		//this.resetChecks();
		//this.props.setUserPosts(data);
	}

	deleteButton(){
		const data = {
			change_status:"trash",
			//data : this.state.check_mails,
			//page: this.state.current_page
		}
		console.log(data);
		//this.resetChecks();
		//this.props.setUserPosts(data);
	}

	archiveButton(){
		const data = {
			change_status:"archive",
			//data : this.state.check_mails,
			//page: this.state.current_page
		}
		console.log(data);
		//this.resetChecks();
		//this.props.setUserPosts(data);
	}

	openMenu(){
		var d = document;
		var mi = d.getElementsByClassName('mi')[0]
		mi.setAttribute('style','width: 200px;')
	}
	
	closeMenu(){
		var d = document;
		var mi = d.getElementsByClassName('mi')[0]
		mi.removeAttribute('style')
	}

	render(){
		const profile_loading = this.props.profile.loading;
		const pos_loading = this.props.post.loading;
		
		if(this.props.auth.isAuthenticated){
			if (isEmpty(this.props.post.post) || profile_loading || pos_loading)
				return(<Spinner />);
		
			else {
				return(
					<div style={{height:"100%",width:"100%"}}>
						<TopBanner user = {this.state.user} coin = {this.state.coins} picture ={this.state.picture} callback={this.logoutButton} callback_set={this.settingsButton} isLogin={true} />
						<div style={{backgroundColor:"transparent"}} className="middle">
							<div className="left-menu-container">
								<div className="left-menu-inner">
									<div className="scroll-container" aria-labelledby="left-scroll">
										<LeftMenu  callback = {this.leftMenuButtons} callback_create = {this.createButton} unread={this.state.unread}/>
									</div>
								</div>
							</div>
							<div className="popup-container">
								<div className="popup-inner">
									<div id="inbox" className="inbox-container">
										<div className="scroll-container" aria-labelledby="mailbox-scroll">
											<div className="mail-header-container" dangerouslySetInnerHTML={this.getMailHeader()}>
											</div>
											<div className="ql-editor mail-content-container" dangerouslySetInnerHTML={this.getMailContent()}>
											</div>
											<div className="from-recipient-container">
												<div className="from-container">
													<div className="from-inner">
														<div style={{paddingBottom:"15px"}}><p id="from_text">{this.state.lang.from}</p></div>
															<div className="from-account-container">
																<div style={{paddingRight:"10px", userSelect:"none"}}>
																	<img className="user-picture" src={this.state.mail.profileImage} alt="profile"/>
																</div>
															<div>
																<p id="from_account">{this.state.mail.name}</p>
																<p id="from_date">{setDate(this.state.mail.date)}</p>
															</div>
														</div>
													</div>
													<div className="from-button-container">
														<div className="from-button-inner">
															<button className="menu-button" onClick={()=> this.deleteButton()}>{this.state.lang.buttons.delete}</button>
															<button className="menu-button" onClick={()=> this.spamButton()}>{this.state.lang.buttons.spam}</button>
															<button className="menu-button" onClick={()=> this.archiveButton()}>{this.state.lang.buttons.arch}</button>
														</div>
														<div><button id="share_linkedin">{this.state.lang.buttons.share}</button></div>
													</div>
												</div>
												<div className="recipients-container">
													<div style={{paddingBottom:"10px"}}><p className="txt-up-bl">{this.state.lang.recipients}</p></div>
													<div className="recipients-types-container">
														{this.state.mail.receivers.map( (receivers,index) => (<div key = {index}>{this.setRecipients(receivers)} </div>) )}
													</div>
												</div>
											</div>
											<div className="replies-container">
												<div className="replies-counter">
													<div className="replies-counter-inner">
														<div><p className="txt-up-bl">{this.state.lang.replies}</p></div>
														<div><p id="reply-counter">{this.state.mail.comments.length}</p></div>
													</div>
												</div>
												{this.setComments()}
												{this.state.mail.comments.map((comments,index)=>(<div className = "comments" key={index} >{this.setReplies(comments)}</div>) )}
												
											</div>
											{this.setWarn()}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="nu">
							<button id="nu-but" onClick={()=> this.openMenu()}> &gt;&gt; </button>
						</div>
						<div className="mi">
							<div className="chi"><button id="chi-but" onClick={()=> this.closeMenu()}> &lt;&lt; </button></div>
							<div style={{overflow:"auto"}}>
								<div className="left-menu-inner">
									<LeftMenu callback = {this.leftMenuButtons} callback_create = {this.createButton} unread = {this.state.unread}/>
								</div>
							</div>
						</div>
					</div>
				);
			}
		}
		else{
			if (isEmpty(this.props.post.post) || pos_loading)
				return(<Spinner />);
			else{
			return(<div style={{height:"100%",width:"100%"}}>
						<TopBanner user = {this.state.user} coin = {this.state.coins} picture ={this.state.picture} callback={this.logoutButton} callback_set={this.settingsButton} isLogin={false}/>
						<div style={{backgroundColor:"transparent"}} className="middle">
							<div style={{margin:"auto",width:"unset"}} className="popup-container">
								<div style={{padding:"10px"}} className="popup-inner">
									<div id="inbox" className="inbox-container">
										<div className="scroll-container" aria-labelledby="mailbox-scroll">
											<div className="mail-header-container" dangerouslySetInnerHTML={this.getMailHeader()}>
											</div>
											<div className="ql-editor mail-content-container" dangerouslySetInnerHTML={this.getMailContent()}>
											</div>
											<div className="from-recipient-container">
												<div className="from-container">
													<div className="from-inner">
														<div style={{paddingBottom:"15px"}}><p id="from_text">{this.state.lang.from}</p></div>
															<div className="from-account-container">
																<div style={{paddingRight:"10px", userSelect:"none"}}>
																	<img className="user-picture" src={this.state.mail.profileImage} alt="profile"/>
																</div>
															<div>
																<p id="from_account">{this.state.mail.name}</p>
																<p id="from_date">{setDate(this.state.mail.date)}</p>
															</div>
														</div>
													</div>
												</div>
												<div className="recipients-container">
													<div style={{paddingBottom:"10px"}}><p className="txt-up-bl">{this.state.lang.recipients}</p></div>
													<div className="recipients-types-container">
														{this.state.mail.receivers.map( (receivers,index) => (<div key = {index}>{this.setRecipients(receivers)} </div>) )}
													</div>
												</div>
											</div>
											<div className="replies-container">
												<div className="replies-counter">
													<div className="replies-counter-inner">
														<div><p className="txt-up-bl">{this.state.lang.replies}</p></div>
														<div><p id="reply-counter">{this.state.mail.comments.length}</p></div>
													</div>
												</div>
												{this.state.mail.comments.map((comments,index)=>(<div className = "comments" key={index} >{this.setReplies(comments)}</div>) )}
											</div>
											{this.setWarn()}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>)
		}
		}
	}
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile:state.profile,
  response:state.response,
  post:state.post,
  errors: state.errors
});

Content.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getPost:PropTypes.func.isRequired,
  logoutUser:PropTypes.func.isRequired,
  addComment:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{ getCurrentProfile,logoutUser,getPost,addComment })(Content);
export {Content};