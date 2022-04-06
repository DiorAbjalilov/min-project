import { POST_FETCH } from "./types";

export function postRedux(data) {
  return (dispatch) => {
    dispatch({
      type: POST_FETCH,
      payload: data,
    });
  };
}
