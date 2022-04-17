import { combineReducers } from "redux";
import imgReducer from "./imgReducer";
import postReducer from "./postReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  posts: postReducer,
  imgs: imgReducer,
  user: userReducer,
});
