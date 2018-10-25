import React from "react";
import PropTypes from "prop-types";

import {connect} from 'react-redux';
import LoginButton from './dist/components/auth/LoginButton.js';
import {GetLang} from "./dist/js/languages.js";
import { loginUser } from "./dist/actions/authActions";

class Login extends React.Component{

	componentDidMount() {
		console.log("login-Didmount")
		if (this.props.auth.isAuthenticated) {
			if(this.props.auth.user.isCompleted)
				this.props.history.push("/mail/inbox");
			else
				this.props.history.push("/welcome");
		}
		this.setTitle()
	}
	
	state = { lang : new GetLang()}
	
	componentWillReceiveProps(nextProps) {
		 if (nextProps.auth.isAuthenticated) {
			if(nextProps.auth.user.isCompleted)
				this.props.history.push("/mail/inbox");
			else
				this.props.history.push("/welcome");
		}
	}

	responseLinkedin = response => {
    if (response.id) {
      const userData = {
        linkedinId: response.id,
        firstName: response.firstName,
        lastName: response.lastName,
        formattedName: response.formattedName,
        industry: response.industry,
        summary: response.summary,
        headline: response.headline,
        location: response.location,
        profileImage: undefined,
        email: response.emailAddress,
        linkedinUrl: response.publicProfileUrl
      };
	  if(response.pictureUrls)
		  userData.profileImage = response.pictureUrls.values[0]
	  
	  this.props.loginUser(userData);
    } else {
      console.log("logout");
    }
  };

	setTitle(){
		var d = document;
		d.getElementsByTagName("title")[0].innerHTML = "Ecosystem Mail - "+this.state.lang.login_t;
	}

	render() {
			return (
				<div className="login-container">
					<div className="login-img-cont"><img className="huge-2" src={require('./fonts/Mail-Picture.png')} alt="Mail" /></div>
					<div className="login-text-cont">
						<h1 className="mb10">{this.state.lang.login}</h1>
						<p className="topnav-text mt0 mb10">{this.state.lang.login_text}</p>
						<div className="connect-linkedin-container mb50">
						<LoginButton
							clientId="86qb9j2t46mcrr"
							callback={this.responseLinkedin} 
							fields=":(id,firstName,lastName,formatted-name,email-address,public-profile-url,industry,headline,location,summary,picture-urls::(original))"
							className={"index-button"}
							buttonText={this.state.lang.buttons.linkedin}
						/></div>
						<a href="">{this.state.lang.links.terms}</a>
					</div>
				</div>
			);
		}
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps,{ loginUser })(Login);