import React from "react";
import {Route } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {GetLang} from "./dist/js/languages.js";
import {findParentBySelector,findCssClassStyle,setDate} from "./dist/js/functions";

import { getCurrentProfile,getUserPosts,setUserPosts } from "./dist/actions/profileActions";
import { logoutUser } from "./dist/actions/authActions";
import { getPosts } from "./dist/actions/postActions";

import isEmpty from "./dist/validation/is-empty.js";

import Spinner from "./Spinner";
import SpinnerSmall from "./Spinner-small";
import {LeftMenu} from './dist/components/mail/LeftMenu.js';
import {TopBanner} from './dist/components/mail/TopBanner.js';

const MAIL_PER_PAGE = 50;

class Mail extends React.Component {
	state = {
		user: "UserName",
		mails : [],//Tüm mailler
		coins: 0,
		first_mail:1,
		last_mail:MAIL_PER_PAGE,
		total_mail: 0,
		check_count:0,
		page_num:0,
		check_mails:[],//Seçilen mailler
		unread:{},
		current_page:"",
		picture:"",
		lang : new GetLang(),
		routes : [
			{
				path: "/mail/trash",
				main: ()=> this.SetMail("trash")
			},
			{
				path: "/mail/archive",
				main: ()=> this.SetMail("archive")
			},
			{
				path: "/mail/draft",
				main: ()=> this.SetMail("draft")
			},
			{
				path: "/mail/sent",
				main: ()=> this.SetMail("sent")
			},
			{
				path: "/mail/ecosystem",
				main: ()=> this.SetMailEcosystem()
			},
			{
				path: "/mail/inbox",
				main: ()=> this.SetMail("inbox")
			}
		]
	}
	
	componentWillMount(){
		console.log("Mail-WillMount");
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && !this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else if(!this.checkRoute()){
			this.props.history.push("/");
		}
		else{
			let loc = this.getCurrentLocation();
			
			if(loc === "ecosystem")
				this.props.getPosts();
			else
				this.props.getUserPosts(loc);
			
			if(isEmpty(this.props.profile.profile)){
				console.log("Mail -- Profile boş--WillMount")
				this.props.getCurrentProfile()
			}
			else{
				console.log("Mail -- stateler hazırlandı --WillMount")
				this.setState({
					user:this.props.profile.profile.formattedName,
					coins:this.props.profile.profile.userCoin,
					picture:this.props.profile.profile.profileImage,
					unread:this.props.profile.unread
				})
			}
			
		}
	}

	componentDidMount(){
		console.log("Mail-DidMount");
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && !this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else if(!this.checkRoute()){
			this.props.history.push("/");
		}
		else{
			if(!this.props.post.loading)
				this.onRouteChanged();
			this.setTitle(this.state.current_page);
			window.addEventListener("resize", this.handleResize);
			window.addEventListener("scroll", this.handleResize);
		}
	}
	
	componentDidUpdate(prevProps,prevState){
		console.log("Mail--DidUpdate");
		//console.log(prevState);
		this.handleResize();
	}

	componentWillUpdate(nextProps,nextState){
		console.log("Mail--WillUpdate");
		//console.log(nextState);
		if(this.state.page_num !== nextState.page_num)
			this.setMailCounter(nextState.page_num,nextState.total_mail);
	}

	componentWillReceiveProps(nextProps) {
		console.log("Mail--WillReceive");
		if (!nextProps.auth.isAuthenticated || (nextProps.auth.isAuthenticated && !nextProps.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			if(isEmpty(this.props.profile.profile)){
				console.log("Mail -- Profile boş--WillReceive")
				this.setState({
					user:nextProps.profile.profile.formattedName,
					coins:nextProps.profile.profile.userCoin,
					picture:nextProps.profile.profile.profileImage,
				});
			}
				let loc = this.getCurrentLocation();
				let total = 0;
				
				if(loc === "ecosystem")
					total = nextProps.post.posts.length;
				else
					total = nextProps.profile.posts.length;
				
				this.setMailCounter(0,total);
				this.setState({total_mail:total,mails:nextProps.profile.posts, unread:nextProps.profile.unread});
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
		
			else if(scr[i].getAttribute('aria-labelledby') === "mail-scroll"){
				var popupSize = findCssClassStyle("popup-inner","padding-top");
				var ibxSize = findCssClassStyle("inbox-menu","height");
				scr[i].style.height = heightSize - (topnavSize +(popupSize*2)+ibxSize) + "px";
			}
		}
	}

	setTitle(title){
		var d = document;
		d.getElementsByTagName("title")[0].innerHTML = "Ecosystem Mail-"+this.state.lang[title];
	}

	setMailCounter(page,total){
		var start = (MAIL_PER_PAGE * page)+1
		var end = MAIL_PER_PAGE * (page+1);
		
		var mail_counts = total;

		if(mail_counts < MAIL_PER_PAGE || end > mail_counts)
			end = mail_counts;
		
		this.setState({page_num:page,first_mail:start, last_mail:end});
	}

	checkRoute(){
		let location = this.getCurrentLocation();
		
		if(location !== undefined){
			this.setState({current_page:location})
			return true;
		}
		
		return false;
	}

	onRouteChanged(path = "Default"){
		var pathName;
		
		if(path === "Default")
			pathName = this.props.location.pathname.split("/")[2];
		else
			pathName = path;
		
		this.setState({current_page:pathName})
		this.resetChecks()
	}

	getCurrentLocation(){
		var routes = ['inbox','ecosystem','sent','trash','draft','sent'];
		
		let location = this.props.location.pathname.split("/")[2];
		
		if(routes.includes(location))
			return location;
		
		return undefined;
	}

	prevButton(){
		var page = this.state.page_num -1
		var start = (MAIL_PER_PAGE * page)+1
		
		if(start < 0)
			return;
		
		this.setState({page_num:page});
		//this.setMailCounter(page);
	}

	nextButton(){
		var page = this.state.page_num +1
		var start = (MAIL_PER_PAGE * page)+1

		if(start > this.state.total_mail)
			return;
		
		this.setState({page_num:page});
		//this.setMailCounter(page);
	}
	
	checkboxButton = (event) =>{
		var elm = event.target;
		var total = this.state.check_count;
		var editButons = document.getElementsByClassName("inbox-button-container")[0]
		var selected = document.getElementById("selected_mail")
		
		if(elm.getAttribute("role") === "checkbox"){
			var checked = elm.getAttribute("aria-checked")
			var parentNode = findParentBySelector(event.target,".inbox-mail")
			var id = parentNode.getAttribute("data-thread-id")
			
			if(checked === "false"){
				elm.setAttribute("aria-checked","true")
				parentNode.setAttribute("style","background-color:#e4f5ff")
				this.pushCheckedMail(id,"true")
				total = total+1
			}
			else{
				elm.setAttribute("aria-checked","false")
				parentNode.removeAttribute("style")
				this.pushCheckedMail(id,"false")
				total = total-1
			}
		}
		else{
			var _checked = elm.getAttribute("aria-checked")
			var all_elm = document.querySelectorAll("[role=checkbox]")
			var _new;
			
			if(_checked === "false"){
				elm.setAttribute("aria-checked","true")
				_new = "true";
				total=all_elm.length;
			}
			else{
				elm.setAttribute("aria-checked","false")
				_new = "false";
				total=0;
			}
			
			for(var i = 0; i<all_elm.length; i++){
				var _parentNode = findParentBySelector(all_elm[i],".inbox-mail")
				var _id = _parentNode.getAttribute("data-thread-id")
				this.pushCheckedMail(_id,_new)
				all_elm[i].setAttribute("aria-checked",_new)
				if(_new === "true")
					_parentNode.setAttribute("style","background-color:#e4f5ff")
				else
					_parentNode.removeAttribute("style")
			}
		}
		
		this.setState({check_count:total})
		
		if(total > 0){
			editButons.setAttribute("style","visibility:visible")
			selected.setAttribute("style","visibility:visible")
		}
		else
			this.resetChecks()
		
		event.stopPropagation();
	}

	leftMenuButtons = res =>{
		if(res === "ecosystem")
			this.props.getPosts();
		else
			this.props.getUserPosts(res);
		
		this.props.history.push(this.props.match.url+"/"+res);
		this.setTitle(res);
		this.onRouteChanged(res);
	}

	createButton = () =>{
		window.location.replace("/new_mail");
		//this.props.history.push("/new_mail");
	}

	logoutButton = () =>{
		this.props.logoutUser();
		this.props.history.push("/");
	}
	
	settingsButton = () =>{
		this.props.history.push("/settings");
	}

	spamButton(){
		const data = {
			change_status:"spam",
			data : this.state.check_mails,
			page: this.state.current_page
		}
		console.log(data);
		this.resetChecks();
		this.props.setUserPosts(data);
	}

	deleteButton(){
		const data = {
			change_status:"trash",
			data : this.state.check_mails,
			page: this.state.current_page
		}
		console.log(data);
		this.resetChecks();
		this.props.setUserPosts(data);
	}

	archiveButton(){
		const data = {
			change_status:"archive",
			data : this.state.check_mails,
			page: this.state.current_page
		}
		console.log(data);
		this.resetChecks();
		this.props.setUserPosts(data);
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

	pushCheckedMail(_id,_state){
		let ch_mail = this.state.check_mails
		var ind = ch_mail.findIndex((obj => obj.id === _id));
		if(ind === -1)
			ch_mail.push({id:_id,page:this.state.current_page,state:_state})
		else
			ch_mail[ind].state = _state
		
		this.setState({check_mails:ch_mail})
		
	}

	resetChecks(){
		var d = document;
		
		d.querySelector('[data-check=checkbox-all]').setAttribute('aria-checked','false')
		d.getElementsByClassName('inbox-button-container')[0].removeAttribute('style')
		d.getElementById('selected_mail').removeAttribute('style')
		
		this.setState({check_mails:[],check_count:0})
	}

	setSubject(text,isRead){
		if(!isRead)
			return (<p className = "mail mail-unread">{text}</p>);
		else
			return (<p className = "mail">{text}</p>);
	}

	SetMailEcosystem = () => {
		var _data = this.props.post.posts;
		
		return(
		_data.map(id => (<div className="inbox-mail-container inbox-mail" key={id._id} onClick ={()=>ShowMailContent(id._id)} data-thread-id={id._id}>
			<div className="wd-695 flex-100-mid">
				<div className="container-checkbox">
					<div className="checkbox-inner flex-100-mid">
						<div className="checkbox" onClick={this.checkboxButton} role = "checkbox" aria-checked="false"></div>
					</div>
				</div>
				<div className="container-mail-img flex-100-mid"><img className="mail_img small" src={id.profileImage} alt="sender" /></div>
				<div className="wd-625">
					<h4 className="mail-sender">{id.name}</h4>
					<div id="mail-sub" ><p className = "mail">{id.subjectText}</p></div>
					
				</div>
				<div className="mail-date-container"><p className="mail-date">{id.date}</p></div>
			</div>
		</div>))
		);
	}

	SetMail = (type) => {
		var e = this.state.mails;
		var x = this.state.page_num;
		var start = (MAIL_PER_PAGE * x);
		var end = MAIL_PER_PAGE * (x+1);
		e = e.slice(start,end);
		
		if(this.props.profile.post_loading){
			return (<SpinnerSmall />)
		}
		else if(e.length === 0){
			let message = this.state.lang.empty.replace("{folder}",this.state.lang[type])
			return(
				<div className="inbox-mail-container" style={{display: "block",backgroundColor: "#d9dbda69"}}>
					<div className="inbox-empty-inner"><p>{message}</p></div>
				</div>
			)
		}
		else
		return(
		e.map(id => (<div className="inbox-mail-container inbox-mail" key={id.mail._id} onClick ={()=>ShowMailContent(id.mail._id)} data-thread-id={id.mail._id}>
			<div className="wd-695 flex-100-mid">
				<div className="container-checkbox">
					<div className="checkbox-inner flex-100-mid">
						<div className="checkbox" onClick={this.checkboxButton} role = "checkbox" aria-checked="false"></div>
					</div>
				</div>
				<div className="container-mail-img flex-100-mid"><img className="mail_img small" src={id.mail.profileImage} alt="sender" /></div>
				<div className="wd-625">
					<h4 className="mail-sender">{id.mail.name}</h4>
					<div id="mail-sub">{this.setSubject(id.mail.subjectText,id.isReaded)}</div>
					
				</div>
				<div className="mail-date-container"><p className="mail-date">{setDate(id.mail.date)}</p></div>
			</div>
		</div>))
		);
	}

	render(){
		const profile_loading = this.props.profile.loading;
		const post_loading = this.props.post.loading;
		
		if (profile_loading || post_loading) {
			return(<Spinner />);}
		else {
			return(
				<div style={{height:"100%",width:"100%"}}>
					<TopBanner user = {this.state.user} coin = {this.state.coins} picture ={this.state.picture} callback={this.logoutButton} callback_set={this.settingsButton} isLogin={true}/>
					<div style={{backgroundColor:"transparent"}} className="middle">
						<div className="left-menu-container">
							<div className="left-menu-inner">
								<div className="scroll-container" aria-labelledby="left-scroll">
									<LeftMenu  callback = {this.leftMenuButtons} callback_create = {this.createButton} unread = {this.state.unread}/>
								</div>
							</div>
						</div>
						<div className="popup-container">
							<div className="popup-inner">
								<div id="inbox" className="inbox-container">
									<div className="inbox-mail-container inbox-menu">
										<div className="inbox-float-left">
											<div className="container-checkbox">
												<div className="checkbox-inner flex-100-mid">
												<div className="checkbox" onClick={this.checkboxButton} data-check="checkbox-all" aria-checked="false"></div>
											</div>
										</div>
										<div className="inbox-button-container">
											<div className="flex-100-mid"><button className="menu-button" onClick={()=> this.spamButton()}>{this.state.lang.buttons.spam}</button></div>
											<div className="flex-100-mid"><button className="menu-button" onClick={()=> this.deleteButton()}>{this.state.lang.buttons.delete}</button></div>
											<div className="flex-100-mid"><button className="menu-button" onClick={()=> this.archiveButton()}>{this.state.lang.buttons.arch}</button></div>
										</div>
									</div>
									<div className="inbox-float-right">
										<p id="selected_mail">{this.state.check_count} {this.state.lang.selected}</p>
										<div className="inbox-mail-counter-container flex-100-mid">
											<p id="display_mail">{this.state.first_mail} - {this.state.last_mail}</p><span>/</span><p id="total_mail">{this.state.total_mail}</p>
										</div>
										<div className="next-prev-button-container flex-100-mid">
											<div><button id="prev-mail" className="menu-button icon-angel-left-thin" onClick={()=> this.prevButton()}></button></div>
											<div><button id="next-mail" className="menu-button icon-angel-right-thin" onClick={()=> this.nextButton()}></button></div>
										</div>
									</div>
								</div>
								<div className="scroll-container" aria-labelledby="mail-scroll">
									{this.state.routes.map((route, index) => (
										<Route
											key={index}
											path={route.path}
											exact={route.exact}
											component={route.main}
										/>
									))}
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
			)
		}
	}
}

const ShowMailContent = (e) =>{
	window.location.href = "/content/"+e;
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile:state.profile,
  post:state.post,
  errors: state.errors
});

Mail.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  logoutUser:PropTypes.func.isRequired,
  getPosts:PropTypes.func.isRequired,
  setUserPosts:PropTypes.func.isRequired,
  getUserPosts:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default connect(mapStateToProps,{ getCurrentProfile,logoutUser,getPosts,getUserPosts,setUserPosts })(Mail);

export {Mail};
