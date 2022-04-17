import { USER_GET } from "./types";

const initialState = {
  user: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_GET:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
