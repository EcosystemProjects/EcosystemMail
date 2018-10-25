import React from "react";
import {Route} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from 'react-redux';

import {GetLang} from "./dist/js/languages.js";
import {findParentBySelector,findCssClassStyle} from "./dist/js/functions";

import { setResponseReload,getResponse } from "./dist/actions/responseActions";
import { setAnswers,getCurrentProfile,clearCurrentProfile } from "./dist/actions/profileActions";

import isEmpty from "./dist/validation/is-empty.js";

import Spinner from "./Spinner";
class Steps extends React.Component{
	
	state = {
		lang : new GetLang(),
		data :[],
		dep_data:[],
		cur_page: 0,
		settings : [],
		question_counts : 0,
		answered_counter: 0,
		coins : 0
	}
	routes = [
		{
			path: "/steps/0",
			exact: true,
			leftSide: () => this.StepsLeft(0,"#187ADF"),
			rightSide:() => this.StepsRight(0)
		},
		{
			path: "/steps/1",
			leftSide: () => this.StepsLeft(1,"#FF9C00"),
			rightSide:() => this.StepsRight(1)
		},
		{
			path: "/steps/2",
			leftSide: () => this.StepsLeft(2,"#BF2884"),
			rightSide:() => this.StepsRight(2)
		},
		{
			path: "/steps/3",
			leftSide: () => this.StepsLeft(3,"#28BF8F"),
			rightSide:() => this.StepsRight(3)
		}
	]
	
	componentWillMount(){
		console.log("Steps--WillMount")
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			if(isEmpty(this.props.profile.profile)){
				console.log("Steps -- profile boş--WillMount")
				this.props.getCurrentProfile()
			}
			
			if(isEmpty(this.props.response.response)){
				console.log("Steps -- response boş--WillMount")
				this.props.getResponse()
			}
		}
	}

	componentDidMount(){
		console.log("Steps--DidMount")
		var pathName = this.props.location.pathname
		var pathNum = parseInt(pathName.split("/")[2],10)
		
		if (!this.props.auth.isAuthenticated || (this.props.auth.isAuthenticated && this.props.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else if(pathName === "/steps" || pathNum >= this.routes.length || isNaN(pathNum))
			this.props.history.push("/steps/0")
		
		else{
			this.setTitle();
			window.addEventListener("resize", this.handleResize);
			window.addEventListener("scroll", this.handleResize);
		}
	}
	
	componentWillReceiveProps(nextProps) {
		console.log("Steps-WillReceive");
		if (!nextProps.auth.isAuthenticated || (nextProps.auth.isAuthenticated && nextProps.auth.user.isCompleted)) {
			this.props.history.push("/");
		}
		else{
			if(isEmpty(this.props.profile.profile) || isEmpty(this.props.response.response)){
				var resp = nextProps.response.response
				this.setState({
					data : resp,
					dep_data : nextProps.response.dep_response,
					coins : nextProps.profile.profile.userCoin,
				})
				this.setDefaultAnswers(resp);
			}
		}
	}

	componentDidUpdate(prevProps){
		if (this.props.location !== prevProps.location){
			this.setSelectedValues();
		}
		this.handleResize();
		this.setTitle();
		this.setStepSelectChecks();
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
			
			if(scr[i].getAttribute('aria-labelledby') === "step-scroll"){
				var hrSize = findCssClassStyle("half-right-inner","padding-top");
				scr[i].style.height = heightSize - (topnavSize +(hrSize*2)) + "px";
			}
		}
	}

	setStepSelectChecks(){
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


	setDefaultAnswers(data){
		var _data = data;
		var temp = [],temp2 = 0;
		_data.map(p=> p.options.map(k=> temp.push({_id:k[0],value:"Select",answer:"",type:k[1]}),temp2 = temp2 +p.options.length))
		this.setState({settings:temp,question_counts:temp2})
	}

	setTitle(){
		var d = document;
		d.getElementsByTagName("title")[0].innerHTML ="Ecosystem Mail - "+this.state.lang.step+" "+(this.state.cur_page+1);
	}

	setSelectedValues(){
		var selects = document.querySelectorAll('[data-key]')
		for(var i = 0; i<selects.length; i++){
			var id = selects[i].getAttribute('data-key')
			var indx = this.HasIndex(id)
			if(indx !== -1){
				var val = this.state.settings[indx].value;
				selects[i].value = val;
			}
		}
	}

	HasIndex(id){return this.state.settings.findIndex(obj => obj._id === id);}

	SetCoins(id,value){
		var counter = this.state.answered_counter
		var indx = this.state.data.map(p=> (p.options.find(f=> f[0] === id)))
		var page = this.state.cur_page
		var cost = indx[page][2]
		var x = this.state.coins
		var s_indx = this.state.settings.findIndex((obj => obj._id === id));
		
		if(value === "Select" && this.state.settings[s_indx].value !== "Select"){
			x = x - cost
			counter = counter - 1
		}
		else if(value !== "Select" && this.state.settings[s_indx].value === "Select"){
			x = x + cost
			counter = counter + 1
		}
		this.setState({coins:x,answered_counter:counter})
	}

	SetSelectMenu = (e) =>{
		if(e[1] === "number"){
			var arr = [],start = e[4][0],end = e[4][1]
			var elm = end - start;
			for (var i = 0; i<=elm; i++)
				arr.push(String(start+i))
		
			return(arr.map((m,ind) => (<option key={m} data-key={ind} value={m}>{m}</option>)))
		}
		else if(e[1] === "selectOne"){
			return(e[4].map((m,ind) => <option key={e[6][ind]} data-key={ind} value={m}>{m}</option>))
		}
		
		else if(e[1] === "linked"){
			var ind = e[4].findIndex(p=>p.SelectedList)
			
			return(e[4][ind].SelectedList.map((m,i)=><option key={e[4][ind].SelectedList[i]} data-key={i} value={m}>{m}</option>))
		}
	}

	StepsRight = (e) =>{
		return(
			this.state.data[e].options.map(id=>(
				<tr key={id[0]}>
					<td>
						<div className="flex-order">
							<div className="info-container">
								<div><p>{id[3]}</p></div>
								<div><p className="token">{id[2]}<span className="icon-post"></span></p></div>
							</div>
							<div className="select-cont"><select className="step-select" onChange={this.ChangeOpt} data-key={id[0]}><option>Select</option>{this.SetSelectMenu(id)}</select></div>
						</div>
					</td>
				</tr>
			))
		);
	}

	StepsLeft = (e,col) =>{
		var cont = this.state.data[e]
		return(<div>
				<h1 style={{color:col}}>{cont.header}</h1>
				<p>{this.state.lang.steps_info.info1}</p>
				<p><b>{this.state.lang.steps_info.info2}</b></p>
				<p>{this.state.lang.steps_info.info3}</p>
		</div>);
	}

	ChangeOpt = (event) =>{
		var opt_id = event.target.getAttribute("data-key")
		var x = event.target["selectedIndex"]
		var opt_key = event.target[x].getAttribute("data-key")
		var opt_value = String(event.target.value)
		
		this.SetCoins(opt_id,opt_value)
		
		//To find dependent variable
		if(this.state.dep_data.includes(opt_id)){
			let ex_data = this.state.data.slice();
			var page = this.state.cur_page;
			var ind = ex_data[page].options.findIndex(p=> p[5] === opt_id)
			
			var list_ind = ex_data[page].options[ind][4].findIndex(p=>p.SelectedList)
			var opt_ind = ex_data[page].options[ind][4].findIndex(t=> t.key === opt_value)
			if(opt_ind !== -1){
				var opt = ex_data[page].options[ind][4][opt_ind].values
				ex_data[page].options[ind][4][list_ind].SelectedList = opt
				
				var opt2 = ex_data[page].options[ind][6][opt_ind].values
				ex_data[page].options[ind][6][list_ind].SelectedList = opt2

				this.setState({data :ex_data })
			}
		}
		
		//To store user's choice in state
		var indx = this.state.settings.findIndex((obj => obj._id === opt_id));
		if(indx !== -1){
			let a = this.state.settings.slice()
			a[indx].value = opt_value
			a[indx].answer = opt_key
			this.setState({settings:a})
		}
	}

	NextPage(){
		var x = this.props.location.pathname.split("/")
		var page = parseInt(x[2],10) +1
		this.setState({cur_page:page})
		if(page >= this.routes.length)
			this.Complete()
		else
			this.props.history.push("/steps/"+page)
	}

	PrevPage(){
		var x = this.props.location.pathname.split("/")
		var page = parseInt(x[2],10) -1
		this.setState({cur_page:page})
		if(page < 0){
			this.props.setResponseReload()
			this.props.history.push("/welcome")//Değişebilir
		}
		else
			this.props.history.push("/steps/"+page)
	}

	Complete(){
		if(this.state.question_counts > this.state.answered_counter){
			var alert_message = this.state.lang.uncomplete_alert
			alert(alert_message)
		}
		else{
			const data = {
				quests:this.state.settings,
				coins:this.state.coins
			}
			
			this.props.setResponseReload()
			this.props.setAnswers(data)
			this.props.clearCurrentProfile();
			//Database kaydet fln filan
		}
	}

	render(){
		const { profile, loading } = this.props.profile;
		const questions_loading = this.props.response.questions_loading;
		if (profile === null || loading || !questions_loading) {
			return(<Spinner />);
		}
		else {
			return(
			<div>
				<div className="topnav" role="banner">
					<div className="topnav-inner">
						<div className="back-container">
							<div><button className="back-button icon-angel-left-thin" onClick ={()=>this.PrevPage()}>{this.state.lang.buttons.back}</button></div>
						</div>
						<div className="steps-container">
							<div className="steps-inner">
								<img className="medium" src={require("./fonts/step1.svg")} alt="step1"/>
								<img className="medium" src={require("./fonts/step2.svg")} alt="step2"/>
								<img className="medium" src={require("./fonts/step3.svg")} alt="step3"/>
								<img className="medium" src={require("./fonts/step4.svg")} alt="step4"/>
								<img className="medium" src={require("./fonts/eco-logo.svg")} alt="eco"/>
							</div>
						</div>
						<div className="next-container">
							<div><p className="icon-post" id="member_point">{this.state.coins}</p></div>
							<div><button className="next-button" onClick={()=>this.NextPage()}>{this.state.lang.buttons.next}</button></div>
						</div>
					</div>
				</div>
				<div className="middle">
					<div className="half-left-container">
						<div className="half-left-inner">
							<div>
								{this.routes.map((route, index) => (
										<Route
											key={index}
											path={route.path}
											exact={route.exact}
											component={route.leftSide}
										/>
									))}
							</div>
						</div>
					</div>
					<div className="half-right-container">
						<div className="half-right-inner">
							<div className="scroll-container" aria-labelledby="step-scroll">
								<table id="step1-table" style={{margin:"auto"}}>
									<tbody>
											{this.routes.map((route, index) => (
												<Route
													key={index}
													path={route.path}
													exact={route.exact}
													component={route.rightSide}
												/>
											))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
		}
	}
}

Steps.propTypes = {
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	response: PropTypes.object.isRequired,
	setResponseReload : PropTypes.func.isRequired,
	setAnswers: PropTypes.func.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
	clearCurrentProfile : PropTypes.func.isRequired,
	getResponse:PropTypes.func.isRequired,
};

const mapsStateToProps = (state) =>({
	profile: state.profile,
	auth: state.auth,
	response: state.response,
});

export default connect(mapsStateToProps,{setResponseReload,setAnswers,getCurrentProfile,clearCurrentProfile,getResponse})(Steps);

export{Steps}