import React from 'react';
import isEmpty from '../../validation/is-empty.js';

import {GetLang} from "../../js/languages.js";


class LeftMenu extends React.Component{
	state = {
		buttons : ["Inbox","Ecosystem","Sent","Draft","Archive","Trash"],
		lang : new GetLang()
	}
	
	constructor(e){
		super();
	}

	componentDidMount(){
	}

	createButton(){
		this.props.callback_create()
	}

	leftMenuButton(e){
		this.props.callback(e)
	}

	setButtons =(e) =>{
		var inb = 0//for count mails
		let cap = e.toLowerCase();
		let unread = this.props.unread;
		if(!isEmpty(unread) && unread.hasOwnProperty(cap))
			inb = unread[cap];
		
		if(inb > 0)
			return (<button className={"menu-button unread-mail icon-"+e} onClick={()=>this.leftMenuButton(cap)} data-placeholder={inb}>{this.state.lang.buttons[cap]}</button>)
		else
			return (<button className={"menu-button icon-"+e} onClick={()=>this.leftMenuButton(cap)}>{this.state.lang.buttons[cap]}</button>)
	}
	
	render(){
		return (
			<div>
				<div className="create-button-container"><button className="create-button" onClick={()=> this.createButton()}>{this.state.lang.buttons.create}</button></div>
				<div className="menu-button-container" role="navigation">
					{this.state.buttons.map(x =><div className="menu-button-inner"key={x}>{this.setButtons(x)}</div>)}
				</div>
				<div className="about-container">
									<a href="">{this.state.lang.links.about}</a>
									<a href="">{this.state.lang.links.contact}</a>
									<a href="">{this.state.lang.links.term}</a>
									<p>2018 &copy; Mentornity</p>
								</div>
			</div>
		);
	}
}

export {LeftMenu}