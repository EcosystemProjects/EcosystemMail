import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {GetLang} from "./dist/js/languages.js";
import {findCssClassStyle} from "./dist/js/functions";

import Spinner from "./Spinner";

import {LeftMenu} from './dist/components/mail/LeftMenu.js';
import {TopBanner} from './dist/components/mail/TopBanner.js';

import { getCurrentProfile,clearCurrentProfile,setAnswers } from "./dist/actions/profileActions";
import { logoutUser } from "./dist/actions/authActions";
import { setResponseReload,getResponse } from "./dist/actions/responseActions";

import isEmpty from "./dist/validation/is-empty.js";

class Settings extends React.Component{
	state ={
		lang_options : ['en-EN','tr-TR'],
		user:"UserName",
		coins:0,
		picture: "",
		lang : new GetLang(),
		data : [],
		dep_data:[],
		ans_cont:[],
		optionStatus:false,
		unread:{}
	}
	
	componentWillMount(){
		console.log("Settings--WillMount")
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && !this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			this.props.getResponse();
			
			if(isEmpty(this.props.profile.profile)){
				console.log("Settings -- profile boş--WillMount")
				this.props.getCurrentProfile();
			}
			else{
				this.setState({
					user:this.props.profile.profile.formattedName,
					coins:this.props.profile.profile.userCoin,
					picture:this.props.profile.profile.profileImage,
					unread:this.props.profile.unread,
				});
			}
		}
	}
	
	componentDidMount(){
		console.log("Settings--DidMount")
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && !this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			this.setTitle();
			window.addEventListener("resize", this.handleResize);
			window.addEventListener("scroll", this.handleResize);
			
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log("Settings--WillReceive")
		if (!nextProps.auth.isAuthenticated || (nextProps.auth.isAuthenticated && !nextProps.auth.user.isCompleted)) {
			window.location.href = "/";
		}
		else{
			this.setState({
				user:nextProps.profile.profile.formattedName,
				coins:nextProps.profile.profile.userCoin,
				data:nextProps.response.response,
				dep_data:nextProps.response.dep_response,
				picture:nextProps.profile.profile.profileImage,
				unread:nextProps.profile.unread
			})
			if(nextProps.profile.profile.answeredQuestions !== undefined){
				this.setDefaultAnswers(nextProps.profile.profile.answeredQuestions)
			}
		}
	}

	componentDidUpdate(prevProps){
		console.log("Settings--DidUpdate")
		this.handleResize();
		this.setInitialValues(prevProps);
		
	}

	componentWillUnmount(){
		this.props.setResponseReload();
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

	setDefaultAnswers(data){
		var temp = []
		data.map(p=> temp.push({_id: p.question, answer:p.order,type:p.type}))
		this.setState({ans_cont:temp})
	}

	setInitialValues(prevProps){
		if(prevProps.response.questions_loading !== this.props.response.questions_loading){
			this.setSubSelectedValues()
		}
		
		if(!this.state.optionStatus)
			this.setSelectedValues()
	}

	setTitle(){
		var d = document;
		d.getElementsByTagName("title")[0].innerHTML = "Ecosystem Mail - "+this.state.lang.settings;
	}

	leftMenuButtons = res =>{
		this.props.setResponseReload();
		this.props.history.push("/mail/"+res);
	}

	logoutButton = () =>{
		this.props.logoutUser();
		//window.location.reload();
		//this.props.history.push("/");
	}

	settingsButton = () =>{
		console.log(this.state.ans_cont)
	}

	createButton = () =>{
		window.location.replace("/new_mail");
		//this.props.history.push("/new_mail");
	}

	saveButton(){
		const data = {
			quests:this.state.ans_cont,
			coins:this.state.coins
		}
		this.props.setResponseReload();
		this.props.setAnswers(data);
		this.props.clearCurrentProfile();
		
		var lang_val = parseInt(document.getElementById("language").value,10);
		var set_value = this.state.lang_options[lang_val]
		localStorage.setItem("lang",set_value)
		window.location.reload();
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

	setQuestions(){
		var _data = this.state.data;
		return(
			_data.map(p=> (
				<div className="mail-profile-container" key={p.step_id}>
					<div className="profile-header-container"><h2 className={this.getHeaderClass(p.step_id)}>{p.header}</h2></div>
					{this.setSelects(p.options)}
				</div>
			))
		)
	}

	setSelects(options){
		return(
			options.map(t=>(
				<div className="flex-order" key={t[0]}>
					<div className="info-container wd-100p">
						<div><p>{t[3]}</p></div>
						<div><p className="token">{t[2]}<span className="icon-post"></span></p></div>
					</div>
					<div className="select-cont wd-100p">
						<select className="step-select" onChange={(e)=> this.ChangeOpt(t[0],e)} data-select={t[0]}>
							{this.setOptions(t[4],t[1],t[5])}
						</select>
					</div>
				</div>
			))
		)
	}

	setOptions(arr,type,key){
		if(type === "number"){
			var _arr = [],start = arr[0],end = arr[1]
			var elm = end - start;
			for (var i = 0; i<=elm; i++)
				_arr.push(String(start+i))
		
			return(_arr.map((m,ind) => (<option key={m} data-key={ind} value={m}>{m}</option>)))
		}
		else if(type === "selectOne"){
			return(arr.map((m,ind) => <option key={m} data-key={ind} value={m}>{m}</option>))
		}
		else if(type === "linked"){
			var ind = arr.findIndex(p=>p.SelectedList)
			return(arr[ind].SelectedList.map((m,i)=><option key={arr[ind].SelectedList[i]} data-key={i} value={m}>{m}</option>))
		}
	}

	setLanguage(){
		var _data = this.state.lang_options;

		return(_data.map((x,ind)=> <option key={ind} value={ind}>{this.state.lang.langs[x]}</option>))
	}

	getHeaderClass = (id) =>{
		var cls =["blue-header","yellow-header","purple-header","green-header"]
		return cls[id%4]
	}

	ChangeOpt(key,e){
		if(!this.state.optionStatus)
			this.setState({optionStatus:true})
		
		var opt = e.target.value;
		var answers = this.state.ans_cont;
		var ind = answers.findIndex(p=> p._id === key)
		var selected = e.target.selectedIndex;
		
		if(this.state.dep_data.includes(key)){
			this.setSubCategoryValues(opt,key)
		}
		
		answers[ind].answer = selected;
		
		this.setState({ans_cont:answers})
		
	}

	HasIndex(id){return this.state.ans_cont.findIndex(obj => obj._id === id);}

	setSubSelectedValues(){
		var _data = this.state.ans_cont;
		var selects = document.querySelectorAll('[data-select]')
		
		for(var i = 0; i<selects.length; i++){
			
			var value2 = selects[i].getAttribute('data-select')
			
			var ind = this.HasIndex(value2)
			
			if(this.state.dep_data.includes(value2) && ind !== -1){
				var ord = _data[ind].answer;
				
				var opt = selects[i].options[ord].value;
				this.setSubCategoryValues(opt,value2)
			}
		}
	}

	setSelectedValues(){
		var _data = this.state.ans_cont;
		var selects = document.querySelectorAll('[data-select]')
		
		for(var i = 0; i<selects.length; i++){
			var value = selects[i].getAttribute('data-select')
			
			var ind = this.HasIndex(value)
			if(ind !== -1){
				var ord = _data[ind].answer;
				selects[i].selectedIndex = ord
			}
		}
		
		var _v = localStorage.getItem("lang")
		var lang_data = this.state.lang_options
		var l_ind = lang_data.findIndex(p=> p === _v)
		
		var d = document.getElementById("language")
		
		if(l_ind !== -1 && d !== null)
			d.selectedIndex = l_ind
	}

	setSubCategoryValues(opt,key){
		var _data = this.state.data
		
		var c_ind = _data.findIndex(p=> p.options.map(k=> k).filter(t=> t[0] === key))
		var q_ind = _data[c_ind].options.map(p=> p).findIndex(k=> k[5] === key)
		var s_ind = _data[c_ind].options[q_ind][4].findIndex(p=> p.SelectedList)
		var o_ind = _data[c_ind].options[q_ind][4].findIndex(p=> p.key === opt)
			
		var _new_val = _data[c_ind].options[q_ind][4][o_ind].values
			
		_data[c_ind].options[q_ind][4][s_ind].SelectedList = _new_val
			
		this.setState({data:_data})
	}

	render(){
		const { profile, loading } = this.props.profile;
		const questions_loading = this.props.response.questions_loading;
		if (profile === null || loading || !questions_loading) {
			return(<Spinner />);
		}
		else{
			return(
				<div style={{height:"100%",width:"100%"}}>
					<TopBanner user = {this.state.user} coin = {this.state.coins} callback={this.logoutButton} picture = {this.state.picture} callback_set={this.settingsButton} isLogin={true}/>
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
								<div id="settings" className="inbox-container">
									<div className="scroll-container" aria-labelledby="mailbox-scroll">
										<div className="mail-profile-container">
											<div className="profile-header-container"><h2>{this.state.lang.my_profile}</h2></div>
											<div className="myprofile-header-info">
												<p className="profile-info">{this.state.lang.steps_info.info1}</p>
												<p className="profile-info-bold">{this.state.lang.steps_info.info2}</p>
											</div>
										</div>
										{this.setQuestions()}
										<div className="mail-profile-container">
											<div className="profile-header-container"><h2 className="green-header">{this.state.lang.other_settings}</h2></div>
												<div className="flex-order">
													<div className="info-container wd-100p">
														<div><p>{this.state.lang.language}</p></div>
													</div>
													<select id="language" className="step-select">
														{this.setLanguage()}
													</select>
												</div>
										</div>
										<div className="mail-profile-container">
											<div className="save-button-container"><button id="save_button" onClick={()=> this.saveButton()}>{this.state.lang.buttons.save}</button></div>
										</div>
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
								<LeftMenu  callback = {this.leftMenuButtons} callback_create = {this.createButton} unread = {this.state.unread}/>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile:state.profile,
  errors: state.errors,
  response: state.response
});

Settings.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  clearCurrentProfile:PropTypes.func.isRequired,
  setResponseReload : PropTypes.func.isRequired,
  logoutUser:PropTypes.func.isRequired,
  setAnswers:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps,{ getCurrentProfile,clearCurrentProfile,setResponseReload,logoutUser,getResponse,setAnswers })(Settings);

export {Settings}
