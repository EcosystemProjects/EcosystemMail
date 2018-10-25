import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {GetLang} from "./dist/js/languages.js";

import isEmpty from "./dist/validation/is-empty.js";

import { logoutUser } from "./dist/actions/authActions";
import { getCurrentProfile } from "./dist/actions/profileActions";


import Spinner from "./Spinner";

class Welcome extends React.Component{
	state = {
		lang : new GetLang(),
		user : "UserName",
		picture:""
	}
	componentWillMount(){
		console.log("Welcome-WillMount");
		if (!this.checkSession()) {
				this.props.history.push("/");
		}
		else{
			if(isEmpty(this.props.profile.profile)){
				console.log("Welcome -- Profile boş--WillMount")
				this.props.getCurrentProfile()
			}
			else{
				console.log("Welcome -- stateler hazırlandı --WillMount")
				this.setState({
					user:this.props.profile.profile.formattedName,
					picture:this.props.profile.profile.profileImage
				})
			}
		}
	}
	
	componentDidMount(){
		console.log("Welcome-DidMount");
		if (!this.checkSession()) {
				this.props.history.push("/");
		}
		else{
			this.setTitle()
			//this.props.getCurrentProfile();
		}
	}
	
	componentWillReceiveProps(nextProps) {
		console.log("Welcome-WillReceive");
		if (!nextProps.auth.isAuthenticated || (nextProps.auth.isAuthenticated && nextProps.auth.user.isCompleted)) {
			this.props.history.push("/mail/inbox");
		}
		
		if(nextProps.response.questions_loading){
			this.props.history.push("/steps/0");
		}
		this.setState({
			user:nextProps.profile.profile.formattedName,
			picture:nextProps.profile.profile.profileImage
		})
	}

	setTitle(){
		var d = document;
		d.getElementsByTagName("title")[0].innerHTML = "Ecosystem Mail - "+this.state.lang.welcome;
	}

	checkSession = () =>{
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && this.props.auth.user.isCompleted)) {
				return false;
		}
		return true;
	}

	logoutButton(){
		this.props.logoutUser();
		this.props.history.push("/");
	}
	
	startButton(){
		this.props.history.push("/steps/0");
	}

	render(){
		const { profile, loading } = this.props.profile;
		
		if (profile === null || loading ) {
			return(<Spinner />);}
		else {
			return (
				<div>
					<div className="welcome-topnav">
						<h1>{this.state.lang.welcome}</h1>
						<p className="topnav-text">{this.state.lang.welcome_text}</p>
					</div>
					<div className="welcome-detail-scheme">
						<div className="detail-scheme-inner">
							<div className="schemeinner big">
								<img src={require('./fonts/step1.svg')} alt="step1" /><p style={{color:"#187ADF"}}>{this.state.lang.steps.step_1}</p>
							</div>
							<div style={{margin:"auto"}}><img src={require('./fonts/next.png')} alt="next" /></div>
							<div className="schemeinner big">
								<img src={require('./fonts/step2.svg')} alt="step2" /><p style={{color:"#FF9C00"}}>{this.state.lang.steps.step_2}</p>
							</div>
							<div style={{margin:"auto"}}><img src={require('./fonts/next.png')} alt="next" /></div>
							<div className="schemeinner big">
								<img src={require('./fonts/step3.svg')} alt="step3" /><p style={{color:"#BF2884"}}>{this.state.lang.steps.step_3}</p>
							</div>
							<div style={{margin:"auto"}}><img src={require('./fonts/next.png')} alt="next" /></div>
							<div className="schemeinner big">
								<img src={require('./fonts/step4.svg')} alt="step4" /><p style={{color:"#28BF8F"}}>{this.state.lang.steps.step_4}</p>
							</div>
							<div style={{margin:"auto"}}><img src={require('./fonts/next.png')} alt="next" /></div>
							<div className="schemeinner big">
								<img src={require('./fonts/eco-logo.svg')} alt="step5" /><p style={{color:"#525252"}}>{this.state.lang.steps.step_5}</p>
							</div>
						</div>
					</div>
					<div className="welcome-button-form">
						<div><button className="welcome-button" onClick = {()=>{this.startButton()}}>{this.state.lang.buttons.start_button}</button></div>
						<div className="img-container">
							<div className="img-inner">
								<img id="member_picture" src={this.state.picture} alt="member"/></div></div>
						<p id="member_name">{this.state.user}</p>
						<p id="member_connect_type">{this.state.lang.connect.connect_linkedin}</p>
						<div><button id="logout" className="menu-button" onClick={()=>this.logoutButton()}>{this.state.lang.buttons.logout_button}</button></div>
					</div>
				</div>
			);
		}
	}
}

Welcome.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
	profile: state.profile,
	response: state.response
});

export default connect(mapStateToProps,{ logoutUser,getCurrentProfile})(Welcome);
export {Welcome};