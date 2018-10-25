import React from 'react';
import {GetLang} from "../../js/languages.js";

class TopBanner extends React.Component{
	constructor(e){
		super();
	}
	
	state = {
		lang : new GetLang(),
		user : "UserName",
		coins : 0
	}
	
	componentDidMount(){
		this.setState({
			user:this.props.user,
			coins:this.props.coin,
			picture:this.props.picture
		})
	}
	
	loginButton(){
		window.location.href = "/";
	}
	
	logoutButton(){
		this.props.callback()
	}
	
	settingsButton(){
		this.props.callback_set()
	}
	
	searchMail(event){
		var value = event.target.value;
		console.log(value)
	}
	
	validate(){
		if(this.props.isLogin){
			return(
			<div style={{display:"flex"}}>
				<div className = "account-point-container"><a href="" className="icon-post" id="member_point">{this.state.coins}</a></div>
				<div className="account-container">
					<div className="account-inner">
						<div style={{textAlign: "right"}}><p id="account_name">{this.state.user}</p></div>
						<div className="logout-setting-container">
							<button className="login-set" onClick={()=>this.logoutButton()}>{this.state.lang.buttons.logout_button}</button>
							<button className="login-set" onClick={()=>this.settingsButton()}>{this.state.lang.buttons.setting}</button>
						</div>
					</div>
					<div id="account-img-cont"><img className="user-picture" src={this.state.picture} alt="member" /></div>
				</div>
			</div>
			);
		}
		else{
			return(
				<div className="top-login-cont">
					<div style={{padding:"10px"}}>
						<button className="top-login-button" onClick={()=> this.loginButton()}>Login</button>
					</div>
				</div>
			);
		}
	}
	
	render(){
		return(
			<div className="topnav" role="banner">
				<div className="topnav-inner">
					<div className="back-container eco-logo">
						<img className="small" style={{marginRight: "5px", borderRadius: "3px"}} src={require("../../../Eco-icon.png")} alt="icon" />
						<h3>Ecosystem Mail</h3>
					</div>
					<div className = "search-container">
						<form className="search-form" role="search" action="" method="get">
							<input type="text" onChange={this.searchMail} placeholder={this.state.lang.search} className="search-input"/>
						</form>
					</div>
					{this.validate()}
				</div>
			</div>
		)
	}
}

export{TopBanner}