import { combineReducers } from "redux";
import imgReducer from "./imgReducer";
import postReducer from "./postReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  imgs: imgReducer,
});
