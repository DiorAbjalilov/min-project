import { POST_FETCH } from "./types";

const initialState = {
  posts: {},
};
export default (state = initialState, action) => {
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
