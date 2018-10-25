import axios from "axios";
import {
  ADD_POST,
  GET_ERRORS,
  GET_POST,
  GET_POSTS,
  GET_POST_INFO,
  POST_LOADING,
  COMMENT_LOADING,
  ADD_COMMENT
} from "./types";
export const addPost = postData => dispatch => {
	dispatch(setPostLoading());
	axios.post("/post", postData).then(res =>
		dispatch({
			type: ADD_POST,
			payload: []
		})
	).catch(err =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

export const getReceivers = data => dispatch => {
	dispatch(setPostLoading());
	axios.post("/post/get-recivers",data).then(res=>
		dispatch({
			type: GET_POST_INFO,
			payload: res.data
		})
	).catch(err=>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};
// export const getPost = id => dispatch => {
//   axios
//     .get("/post/5b8479be1206d9556989c993")
//     .then(res =>
//       dispatch({
//         type: GET_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_POST,
//         payload: null
//       })
//     );
// };
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/post/all")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: err.response.data
      })
    );
};

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/post/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

export const addComment = data => dispatch => {
	dispatch(setCommentLoading());
	axios.post("/post/comment",data).then(res=>{
		dispatch({
			type: ADD_COMMENT,
			payload: res.data
		})
	
	}).catch(err =>
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

export const setCommentLoading = () => {
  return {
    type: COMMENT_LOADING
  };
};