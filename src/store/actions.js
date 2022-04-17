import {
  HIDE_LOADING,
  IMG_GET,
  POSTS_GET,
  SHOW_LOADING,
  USER_GET,
} from "./types";
import axios from "axios";

const postFetchApi = async (type, api, data) => {
  let resData = null;
  if (type === "post") {
    const { userName, lastName, comment } = data;
    const userId = JSON.parse(localStorage.getItem("isLoginMe"))._id;
    const body = {
      userName,
      lastName,
      userId,
      comment,
    };
    const res = await axios.post(api, body);
    resData = await res.data;
  } else if (type === "delete") {
    const res = await axios.delete(api);
    resData = await res.data;
  } else if (type === "postImg") {
    const { title, comment, image } = data;
    const selectFile = image[0];
    // console.log("selectFile", selectFile);
    const userId = JSON.parse(localStorage.getItem("isLoginMe"))._id;
    const formData = new FormData();
    formData.append("image", selectFile);
    formData.append("userId", userId);
    formData.append("title", title);
    formData.append("comment", comment);
    const res = await axios({
      method: "post",
      url: api,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    resData = await res.data;
    console.log(resData);
  }
  return resData;
};
export default postFetchApi;

export function showLoader() {
  return {
    type: SHOW_LOADING,
  };
}
export function hideLoader() {
  return {
    type: HIDE_LOADING,
  };
}

export function getPostsApi() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const userId = JSON.parse(localStorage.getItem("isLoginMe"))._id;
      const body = {
        userId,
      };
      const api = "http://localhost:5000/api/post/userPosts";
      const response = await axios.post(api, body);
      const resData = await response.data;
      dispatch({ type: POSTS_GET, payload: resData });
      setTimeout(() => {
        dispatch(hideLoader());
      }, 700);
    } catch (error) {
      console.log("error message", error);
    }
  };
}
export function getImgsApi() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const userId = JSON.parse(localStorage.getItem("isLoginMe"))._id;
      const body = {
        userId,
      };
      const api = "http://localhost:5000/api/img/all";
      const response = await axios.post(api, body);
      const resData = await response.data;
      dispatch({ type: IMG_GET, payload: resData });
      setTimeout(() => {
        dispatch(hideLoader());
      }, 700);
    } catch (error) {
      console.log("error message", error);
    }
  };
}
export function getUserApi() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const userId = JSON.parse(localStorage.getItem("isLoginMe"))._id;
      const body = {
        userId,
      };
      const api = "http://localhost:5000/api/user/me";
      const response = await axios.post(api, body);
      const resData = await response.data;
      dispatch({ type: USER_GET, payload: resData });
      setTimeout(() => {
        dispatch(hideLoader());
      }, 700);
    } catch (error) {
      console.log("error message", error);
    }
  };
}
