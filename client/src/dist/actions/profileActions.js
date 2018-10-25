import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import {setCurrentUser} from "./authActions";

import { GET_ERRORS, GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE,GET_USERPOSTS,USER_POST_LOADING } from "./types";

export const getCurrentProfile = () => dispatch => {
	dispatch(setProfileLoading());
	axios.get("/profile").then(res =>{
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		})
	}).catch(err =>
		dispatch({
			type: GET_PROFILE,
			payload: {}
		})
	);
};

export const setAnswers = (data) => dispatch => {
	axios.post("/profile/save",data).then(res =>{
		const { token } = res.data;
		localStorage.setItem("jwtToken", token);
		setAuthToken(token);
		const decoded = jwt_decode(token);
		dispatch(setCurrentUser(decoded));
	}).catch(err =>
		dispatch({
			type: GET_PROFILE,
			payload: {}
		})
	);
};

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const userPostLoading = () => {
  return {
    type: USER_POST_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const getUserPosts = (data) => dispatch =>{
	dispatch(userPostLoading());
	axios.post(`/profile/inbox/${data}`).then(res =>
		dispatch({
			type:GET_USERPOSTS,
			payload: res.data
		})
	).catch(err => 
		dispatch({
			type:GET_ERRORS,
			payload: err.response.data
		})
	)
}

export const setUserPosts = (data) => dispatch => {
	dispatch(userPostLoading());
	axios.post("/profile/save_post",data).then(res =>{
		dispatch({
			type:GET_USERPOSTS,
			payload: res.data
		})
	}).catch(err => 
		dispatch({
			type:GET_ERRORS,
			payload: err.response.data
		})
	)
}