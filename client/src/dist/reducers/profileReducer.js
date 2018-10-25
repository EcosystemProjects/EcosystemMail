import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_USERPOSTS,
  USER_POST_LOADING
} from "../actions/types";

const initialState = {
  profile: {},
  posts:[],
  unread:{},
  loading: false,
  post_loading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
	case USER_POST_LOADING:
      return {
        ...state,
        post_loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
		unread:action.payload.unread,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: {}
      };
	case GET_USERPOSTS:
		return {
			...state,
			posts:action.payload.box,
			unread:action.payload.unread,
			post_loading:false
		}
    default:
      return state;
  }
}
