import { ADD_POST, GET_POSTS, GET_POST, POST_LOADING,GET_POST_INFO,ADD_COMMENT,COMMENT_LOADING } from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  post_info:{},
  loading: false,
  post_sent:false,
  comment:false
};

export default function(state = initialState, action) {
  switch (action.type) {
	case COMMENT_LOADING:
		return {
			...state,
        comment: true
		};
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
		loading: false,
		post_sent:true
      };
	case GET_POST_INFO:
		return {
			...state,
			post_info: action.payload,
			loading: false
		};
	case ADD_COMMENT:
	{
		let temp = state.post;
		temp.comments = action.payload;
		return {
			...state,
			comment:false,
			post:temp
		};
	}
    default:
      return state;
  }
}
