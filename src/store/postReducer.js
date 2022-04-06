import { POST_FETCH } from "./types";

const initialState = {
  posts: {},
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCH:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
export default postReducer;
