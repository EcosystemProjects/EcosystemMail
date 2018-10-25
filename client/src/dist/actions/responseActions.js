import axios from "axios";
import { GET_RESPONSE, GET_CATEGORIES, RESPONSE_LOADING,GET_QUESTIONS,QUESTION_RELOAD } from "./types";


export const getResponse = () => dispatch => {
	dispatch(setResponseLoading());
	axios.get("/question/categories").then(res =>{

		dispatch({
			type: GET_CATEGORIES,
			payload: res.data
		})
		dispatch(getQuestions(res.data))
	}).catch(err =>
		dispatch({
			type: GET_CATEGORIES,
			payload: {}
		})
	)
};

const getQuestions = (cat) => dispatch =>{
  axios
    .get("/question")
    .then(res =>{
		var _data = res.data;
		var pay = cat.map(p=> GetQue(p._id,_data))
		dispatch({
			type: GET_QUESTIONS,
			payload: pay,
			})
		dispatch(setResponse());
	})
    .catch(err =>
      dispatch({
        type: GET_QUESTIONS,
        payload: {}
      })
    );
}

export const setResponseLoading = () => {
  return {
    type: RESPONSE_LOADING
  };
};

export const setResponseReload = () => dispatch => {
  dispatch({
    type: QUESTION_RELOAD
  })
};

const setResponse = () => {
  return {
    type: GET_RESPONSE
  };
};

const GetQue = (id,data) =>{
	
	var x = data.map(k=> k).filter(k=> k.category._id === id) 
	return {id:id,data:x};
	
}