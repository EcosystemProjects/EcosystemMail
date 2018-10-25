import React from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import 'bootstrap';
import './highlight.js';
import ReactQuill from 'react-quill';
import 'quill-image-resize-module';

import './dist/js/quill-emoji/src/quill-emoji.js';
import {GetLang} from "./dist/js/languages.js";
import {findCssClassStyle} from './dist/js/functions.js';

import Spinner from "./Spinner";
import {TopBanner} from './dist/components/mail/TopBanner.js';

import { getCurrentProfile } from "./dist/actions/profileActions";
import { logoutUser } from "./dist/actions/authActions";
import { setResponseReload,getResponse } from "./dist/actions/responseActions";
import { addPost,getReceivers } from "./dist/actions/postActions";

import isEmpty from "./dist/validation/is-empty.js";

const Quill = window.Quill;
const $ = window.jQuery;

/*
	CATEGORIES
	You get categories and its options from server with getResponse function in responseActions
	
	Category Schema
	{
		step_id : Category identify number | type => [Number],
		header : Category name | type=> [String],
		options : Category contents like questions, question answers, question costs | type => [Array]
			[
				0 : Question identify number | type => [String],
				1 : Question types[number,selectOne,linked] | type => [String],
				2 : Question cost | type => [Number],
				3 : Question name | type => [String],
				4 : Question answers | type => [Array],
				5 : Question depended key (this value stores linked type questions dependend key with selectOne type questions) | type =>[String],
				6 : Question answer keys (NOT USED ANY COMPONENTS) | type =>[Array]
			]
	}
	
	DEFAULT VALUES
	It set with Newmail Component.Stores Question id and all values.It purpose is check value when user change question value.If user change the option of question
	manually from source randomly Newmail.setCost function will don't accept it.
	
	Default_values Schema
	[
		id : Question identify number | type => [String],
		values : Question answers | type => [Array],
		selected : Question selected answer | type => [Number]
	]
*/

class Newmail extends React.Component{
	
	constructor(props){
		super(props)
		this.quillRef = null;
		this.quillRef_subject = null;
		this.handleChangeSelection = this.handleChangeSelection.bind(this)
		this.onUnload = this.onUnload.bind(this)
	}
	
	state = {
		lang : new GetLang(),
		user:"UserName",
		coins:0,
		cost:0,
		userCount:0,
		picture: "",
		public_content:true,
		show_replies:true,
		categories:[],
		default_values:[]
	}

	componentWillMount(){
		console.log("NewMail--WillMount")
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && !this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			this.props.getResponse();
			
			if(isEmpty(this.props.profile.profile)){
				console.log("NewMail -- profile boş--WillMount")
				this.props.getCurrentProfile();
				this.props.getReceivers([]);
			}
			else{
				this.setState({
					user:this.props.profile.profile.formattedName,
					coins:this.props.profile.profile.userCoin,
					picture:this.props.profile.profile.profileImage
				})
			}
		}
	}
	
	componentDidMount(){
		console.log("NewMail--DidMount")
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && !this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			this.setTitle();
			window.addEventListener("resize", this.handleResize);
			window.addEventListener("scroll", this.handleResize);
			window.addEventListener("beforeunload", this.onUnload);
		}
	}

	componentWillReceiveProps(nextProps){
		console.log("NewMail--WillReceive")
		if (!nextProps.auth.isAuthenticated || (nextProps.auth.isAuthenticated && !nextProps.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else if(nextProps.post.post_sent)
			this.props.history.push("/mail/inbox");
		else{
			this.setState({
				user:nextProps.profile.profile.formattedName,
				coins:nextProps.profile.profile.userCoin,
				picture:nextProps.profile.profile.profileImage,
				categories:nextProps.response.response,
				cost:nextProps.post.post_info.cost,
				userCount:nextProps.post.post_info.userCount,
			})
		}
	}

	componentDidUpdate(prevProps){
		console.log("NewMail--DidUpdate")
		if(prevProps.response.questions_loading !== this.props.response.questions_loading){
			this.setDefaults()
			
		}
		
		if(!this.props.profile.loading && this.props.response.questions_loading){
			this.handleResize()
			$(function () {$('[data-tooltip="tooltip"]').tooltip()})
		}
		
	}

	componentWillUnmount() {
		console.log("NewMail--WillUnmount");
		this.props.setResponseReload();
		window.removeEventListener("resize", this.handleResize);
		window.removeEventListener("scroll", this.handleResize);
		window.removeEventListener("beforeunload", this.onUnload)
		document.body.removeAttribute('style')
	}

	setDefaults(){
		let _data = this.state.categories;
		let _quests = [];
		_data.forEach(p=> p.options.forEach(
			function(k){
				if(k[1] === "number"){
					var _arr = [],start = k[4][0],end = k[4][1] //Number=> Initial number - last number
					var elm = end - start;
					for (var i = 0; i<=elm; i++)
						_arr.push(String(start+i))
					_quests.push({id:k[0],values:_arr,selected:0})
				}
				else if(k[1] === "selectOne"){
					_quests.push({id:k[0],values:k[4],selected:0})
				}
				else if(k[1] === "linked"){
					let temp=[];
					k[4].filter(p=> p.hasOwnProperty("key")).forEach(k=> k.values.forEach(m=> temp.push(m)))
					_quests.push({id:k[0],values:temp,selected:0})
				}
			}
		));
		this.setState({default_values:_quests})
	}

	setTitle(){
		var d = document;
		d.getElementsByTagName("title")[0].innerHTML = "Ecosystem Mail - "+this.state.lang.create;
	}

	onUnload(event) { // the method that will be used for both add and remove event
		this.saveContent();

    }

	handleResize(event){
		let w = window;
		let d = document;
		
		
		let scrollSize = d.documentElement.scrollTop;
		d.body.style.overflowY = "auto";
		var topnavSize = findCssClassStyle("topnav","height");
		var mailcontSize = findCssClassStyle("new-mail-container","padding-top");
		var mailoptSize = findCssClassStyle("mail-options-cont","height");
		var mailrecSize = findCssClassStyle("new-mail-recipients-cont","height");
		
		var total = topnavSize + mailcontSize + mailoptSize + mailrecSize;
		var toolbar = d.getElementById("toolbar");
		
		if(scrollSize > total){
			var tolH = parseInt(w.getComputedStyle(toolbar).getPropertyValue("height"),10);
			d.getElementById("tl-cp").style.display = "block";
			d.getElementById("tl-cp").style.height = tolH+"px";
			
			toolbar.classList.add("toolbar-top")
		}
		else{
			d.getElementById("tl-cp").style.display = "none";
			toolbar.classList.remove("toolbar-top");
		}
	}

	handleChange(content, delta, source, editor){
		//console.log(editor)
	}

	handleChangeSelection(range, source, editor){
		//console.log(this.quillRef)
	}

	handleCheckbox(e,type){
		let status = e.target.getAttribute('aria-checked')
		
		if(status === 'false'){
			e.target.setAttribute('aria-checked','true')
			if(type === 'content')
				this.setState({public_content:true})
			else
				this.setState({show_replies:true})
		}
		else{
			e.target.setAttribute('aria-checked','false')
			if(type === 'content')
				this.setState({public_content:false})
			else
				this.setState({show_replies:false})
		}
	}

	saveContent(){
		var editor = this.quillRef.makeUnprivilegedEditor(this.quillRef.getEditor())
		var editor_subject = this.quillRef_subject.makeUnprivilegedEditor(this.quillRef_subject.getEditor())
		
		if(editor.getLength() <= 1 || editor_subject.getLength() <= 1){
			return;
		}
		
		console.log("Saved");
		
		let message = editor.getHTML();
		let message_text = editor.getText();
		let subject = editor_subject.getHTML();
		let subject_text = editor_subject.getText();
		let rec = this.getReceivers();
			
		var data = {
			subject:subject,
			subject_text:subject_text,
			message:message,
			message_text:message_text,
			isPublic:this.state.public_content,
			isPublicReply:this.state.show_replies,
			cost:this.state.cost,
			receivers:rec,
			users:this.props.post.users,
			send:false
		}
		this.props.addPost(data);
	}

	logoutButton = () =>{
		this.saveContent();
		this.props.logoutUser();
		//window.location.reload();
		//this.props.history.push("/");
	}

	settingsButton = () =>{
		this.saveContent();
		this.props.setResponseReload();
		this.props.history.push("/settings");
	}

	returnMailButton(){
		this.saveContent();
		this.props.setResponseReload();
		this.props.history.push("/mail/inbox");
	}

	lastFiltersButton(){
		
	}

	similarFiltersButton(){
	}

	sendButton(){
		
		if(this.props.post.loading){
			$('#exampleModal-2').modal();
			return;
		}
		
		let user_coins = this.state.coins;
		let total_cost = this.state.cost;
		
		if(total_cost > user_coins){
			alert("Tutar fazla");
		}
		else{
			var editor = this.quillRef.makeUnprivilegedEditor(this.quillRef.getEditor())
			var editor_subject = this.quillRef_subject.makeUnprivilegedEditor(this.quillRef_subject.getEditor())
			
			if(editor.getLength() <= 1 || editor_subject.getLength() <= 1){
				$('#exampleModal').modal();
				return;
			}
			console.log(editor)
			let message = editor.getHTML();
			let message_text = editor.getText();
			let subject = editor_subject.getHTML();
			let subject_text = editor_subject.getText();
			let rec = this.getReceivers();
			
			var data = {
				subject:subject,
				subject_text:subject_text,
				message:message,
				message_text:message_text,
				isPublic:this.state.public_content,
				isPublicReply:this.state.show_replies,
				cost:this.state.cost,
				receivers:rec,
				send:true
			}
			console.log(data)
			//this.props.history.push("/mail/inbox");
			this.props.addPost(data)
		}
	}

	getReceivers(){
		let _data = this.state.default_values;
		let receivers = [];
		for(let i = 0; i<_data.length; i++){
			let _ord = _data[i].selected - 1;
			if(_ord !== -1)
				receivers.push({question:_data[i].id,order:_ord})
		}
		return receivers;
	}

	setReceivers(data){
		return(data.options.map(p=> 
				<div className="recipients" key={p[0]}>
					<div className="recipient-type">{p[3]}</div>
					<select className="recipient-name rec-select" onChange={(e)=> this.ChangeOpt(p[0],e)} data-key={p[0]}>
						<option data-key ="default"value="Select">Select</option>
						{this.setReceiverOptions(p[4],p[1],p[5])}
					</select>
				</div>
			)
		)
	}

	setReceiverOptions(arr,type,key){
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

	ChangeOpt(key,e){
		if(this.props.post.loading){
			let _data = this.state.default_values;
			let ind = _data.findIndex(p=> p.id === key);
			if(ind !== -1){
				let prev = _data[ind].selected;
				e.target.selectedIndex = prev;
				$('#exampleModal-2').modal();
				return;
			}
		}
		
		var opt = e.target.value;
		var s_ind = e.target.selectedIndex;
		
		if(this.props.response.dep_response.includes(key)){
			this.setSubCategoryValues(opt,key)
		}
		
		this.setSelectedValue(key,s_ind)
		
		var recivers = this.getReceivers();
		this.props.getReceivers(recivers);
	}

	setSelectedValue(id,selectedIndex){
		let _data = this.state.default_values;
		let ind = _data.findIndex(p=> p.id === id);
		
		if(ind !== -1){
			_data[ind].selected = selectedIndex;
			this.setState({default_values:_data});
		}
	}

	setSubCategoryValues(opt,key){
		var _data = this.state.categories;
		var _data_def = this.state.default_values;
		
		//FOR SET LINKED QUESTIONS
		var c_ind = _data.findIndex(p=> p.options.map(k=> k).filter(t=> t[0] === key));//category_index
		var q_ind = _data[c_ind].options.map(p=> p).findIndex(k=> k[5] === key);//question_index
		var s_ind = _data[c_ind].options[q_ind][4].findIndex(p=> p.SelectedList);//selectedList index
		var o_ind = _data[c_ind].options[q_ind][4].findIndex(p=> p.key === opt);//option index
			
		var _new_val = _data[c_ind].options[q_ind][4][o_ind].values;
			
		//FOR RESET LINKED SELECTED QUESTION VALUE
		var d_ind = _data_def.findIndex(p=> p.id === _data[c_ind].options[q_ind][0]);
		
		_data[c_ind].options[q_ind][4][s_ind].SelectedList = _new_val;
		_data_def[d_ind].selected = 0;
		
		this.setState({categories:_data,default_values:_data_def})
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
					<div className="create-mail-container">
						<div className="mr-3w">
							<div className="new-mail-container">
								<div className="new-mail-inner">
									<div className="mail-options-cont">
										<div className="mail-options">
											<div style={{display:"flex"}}>
												<button className="return-inbox icon-angel-left-thin" onClick={()=> this.returnMailButton()}>{this.state.lang.buttons.inbox}</button>
											</div>
										</div>
										<div className="mail-options">
											<div className="mail-opt-info">
												<p>{this.state.lang.Public_content}</p>
												<div className="help-popup"><span className="dot" data-tooltip="tooltip" title={this.state.lang.popup.h1}>?</span></div>
											</div>
											<div className="mail-checkbox-cont">
												<span className="mail-input" role="checkbox" aria-checked="true" onClick={(e)=> this.handleCheckbox(e,'content')}></span>
											</div>
										</div>
										<div className="mail-options">
											<div className="mail-opt-info">
												<p>{this.state.lang.Show_replies}</p>
												<div className="help-popup"><span className="dot" data-tooltip="tooltip" title={this.state.lang.popup.h2}>?</span></div>
											</div>
											<div className="mail-checkbox-cont">
												<span className="mail-input" role="checkbox" aria-checked="true" onClick={(e)=> this.handleCheckbox(e,'replies')}></span>
											</div>
										</div>
										<div className="mail-options">
											<div className="create-button-container send-cont">
												<button id="send_button" className="create-button" onClick={()=> this.sendButton()}>{this.state.lang.buttons.send}</button>
											</div>
										</div>
									</div>
									<div className="new-mail-recipients-cont">
										<div style={{height:"40px"}}>
											<div className="new-mail-recipient-info">
												<div className="new-mail-info-left"><p id="rec-info">{this.state.lang.recipients}</p><p className="user-counter">{this.state.userCount}</p></div>
												<div className="new-mail-info-right">
													<div className="help-popup"><span className="dot" data-tooltip="tooltip" title={this.state.lang.popup.h3}>?</span></div>
													<div><p className="icon-post" id="member_point">{this.state.cost}</p></div>
												</div>
											</div>
										</div>
										<div className="filter-button-cont">
											<div className="filter-button-in">
												<button id="last_filters" onClick={()=> this.lastFiltersButton()} >{this.state.lang.buttons.last_filters}</button>
											</div>
											<div className="filter-button-in">
												<button id="similar_filters" onClick={()=> this.similarFiltersButton()}>{this.state.lang.buttons.similar_filters}</button>
											</div>
										</div>
										<div className="new-mail-recipients">
											<div className="recipients-types-container">
											{this.state.categories.map(p=> this.setReceivers(p))}
											</div>
										</div>
									</div>
									<div id="scroll" className="new-mail-message-cont">
										 <div className="text-editor">
											<div id="tl-cp"></div>
											<CustomToolbar tooltip = {this.state.lang.tooltip}/>
												<ReactQuill
													ref={(el) => { this.quillRef_subject = el }}
													theme="bubble" 
													placeholder={this.state.lang.placeholder_subject}
													modules={Newmail.modules_buble}/> 
												<ReactQuill
													ref={(el) => { this.quillRef = el }}
													placeholder={this.state.lang.placeholder_mail}
													modules={Newmail.modules}
													onChange={this.handleChange}
													onChangeSelection={this.handleChangeSelection}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Ecosystem Mail</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">{this.state.lang.send_error}</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>
					<div className="modal fade" id="exampleModal-2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Ecosystem Mail</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									{this.state.lang.wait}
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

var Font = Quill.import('formats/font');
Font.whitelist = ['arial','arial-black','times-new-roman','nunito-bold', 'nunito-regular','poppins-regular','poppins-bold'];
Quill.register(Font, true);
Newmail.modules = {
	toolbar: {
		container: "#toolbar",
		handlers: {
			"undo": undo,
			"redo": redo,
			'emoji': function () {console.log("emoji");},
		},
	},

	"emoji-toolbar": true,
	"emoji-shortname": false,
	"emoji-textarea": false,
	imageResize: {
		handleStyles: {
			backgroundColor: 'black',
			color: 'white'
		}
	},
	history: {delay: 100,maxStack: 100}
}

Newmail.modules_buble = {
	toolbar: [
		[{ 'header': [1, 2, false] }],
		['bold', 'italic', 'underline','strike', 'blockquote','clean']
	],
	keyboard: {
		bindings: {
			enter: {
				key: 13,
				handler: function() {console.log(this)}
			},
			paste:{
				key:86,
				ctrlKey:true,
				handler:function(){}
			}
		}
	}
}

var Image = Quill.import('formats/image')
Image.sanitize = function(url) {
	var new_url = url.slice(22)
	
	var contentType = 'image/png';
	var blob = b64toBlob(new_url, contentType);
	var blobUrl = URL.createObjectURL(blob);
    return blobUrl;
}

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }
    
  var blob = new Blob(byteArrays, {type: contentType});
  return blob;
}

function undo () {
	this.quill.history.undo();
}

function redo () {
	this.quill.history.redo();
}

const CustomToolbar = (prop) => (
	<div id="toolbar">
		<span className="ql-formats">
			<button className="icon-undo ql-undo" data-tooltip="tooltip" title={prop.tooltip.undo}></button>
			<button className="icon-redo ql-redo"data-tooltip="tooltip" title={prop.tooltip.redo}></button>
		</span>
		<span className="ql-formats">
			<button className="ql-bold" data-tooltip="tooltip" title={prop.tooltip.bold}></button>
			<button className="ql-italic" data-tooltip="tooltip" title={prop.tooltip.italic}></button>
			<button className="ql-underline" data-tooltip="tooltip" title={prop.tooltip.underline}></button>
			<button className="ql-strike" data-tooltip="tooltip" title={prop.tooltip.strike}></button>
		</span>
		<span className="ql-formats">
			<button className="ql-link" data-tooltip="tooltip" title={prop.tooltip.link}></button>
			<button className="ql-image" data-tooltip="tooltip" title={prop.tooltip.image}></button>
			<button className="ql-blockquote" data-tooltip="tooltip" title={prop.tooltip.blockquote}></button>
			<button className="ql-code-block" data-tooltip="tooltip" title={prop.tooltip.code}></button>
		</span>
		<span className="ql-formats">
			<select className="ql-color" data-tooltip="tooltip" title={prop.tooltip.color}></select>
			<select className="ql-background" data-tooltip="tooltip" title={prop.tooltip.background}></select>
		</span>
		<span className="ql-formats">
			<button className="ql-header" value="1" data-tooltip="tooltip" title={prop.tooltip.h1}></button>
			<button className="ql-header" value="2" data-tooltip="tooltip" title={prop.tooltip.h2}></button>
		</span>
		<span className="ql-formats">
			<select className="ql-font" data-tooltip="tooltip" title={prop.tooltip.font}>
				<option value="times-new-roman">Times New Roman</option>
				<option value="arial">Arial</option>
				<option value="arial-black">Arial Black</option>
				<option value="nunito-regular">Nunito Reg.</option>
				<option value="nunito-bold">Nunito Bold</option>
				<option value="poppins-regular">Poppins Reg.</option>
				<option value="poppins-bold">Poppins Bold</option>
			</select>
			<select className="ql-size" data-tooltip="tooltip" title={prop.tooltip.size}></select>
		</span>
		<span className="ql-formats">
			<button className="ql-emoji" data-tooltip="tooltip" title={prop.tooltip.emoji}></button>
			<button className="ql-list" value="ordered" data-tooltip="tooltip" title={prop.tooltip.list_order}></button>
			<button className="ql-list" value="bullet" data-tooltip="tooltip" title={prop.tooltip.list_unorder}></button>
			<button className="ql-indent" value="-1" data-tooltip="tooltip" title={prop.tooltip.indent_l}></button>
			<button className="ql-indent" value="+1" data-tooltip="tooltip" title={prop.tooltip.indent_m}></button>
		</span>
		<span className="ql-formats">
			<button className="ql-direction" value="rtl" data-tooltip="tooltip" title={prop.tooltip.direct}></button>
			<select className="ql-align" data-tooltip="tooltip" title={prop.tooltip.align}></select>
			<button className="ql-clean" data-tooltip="tooltip" title={prop.tooltip.clean}></button>
			<button className="ql-script" value="sub" data-tooltip="tooltip" title={prop.tooltip.script_sub}></button>
			<button className="ql-script" value="super" data-tooltip="tooltip" title={prop.tooltip.script_sup}></button>
		</span>
	</div>
)

const mapStateToProps = state => ({
  auth: state.auth,
  profile:state.profile,
  response:state.response,
  post:state.post,
  errors: state.errors
});

Newmail.propTypes = {
  getCurrentProfile:PropTypes.func.isRequired,
  logoutUser:PropTypes.func.isRequired,
  getResponse:PropTypes.func.isRequired,
  setResponseReload:PropTypes.func.isRequired,
  addPost:PropTypes.func.isRequired,
  getReceivers:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{ getCurrentProfile,logoutUser,getResponse,setResponseReload,addPost,getReceivers })(Newmail);

export {Newmail}