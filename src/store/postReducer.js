import {
  HIDE_LOADING,
  HIDE_MODAL,
  POSTS_GET,
  SHOW_LOADING,
  SHOW_MODAL,
} from "./types";

const initialState = {
  posts: [],
  isLoading: false,
  isModal: false,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_GET:
      return {
        ...state,
        posts: action.payload,
      };
    case SHOW_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_MODAL:
      return {
        ...state,
        isModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isModal: false,
      };
    default:
      return state;
  }
};
export default postReducer;
