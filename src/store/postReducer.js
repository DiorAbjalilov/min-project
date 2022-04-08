import { HIDE_LOADING, POSTS_GET, SHOW_LOADING } from "./types";

const initialState = {
  posts: [],
  isLoading: false,
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
    default:
      return state;
  }
};
export default postReducer;
