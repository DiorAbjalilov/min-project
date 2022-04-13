import { HIDE_LOADING, IMG_GET, SHOW_LOADING } from "./types";

const initialState = {
  imgs: [],
  isLoading: false,
};
const imgReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMG_GET:
      return {
        ...state,
        imgs: action.payload,
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
export default imgReducer;
