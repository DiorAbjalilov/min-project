import React, { useState } from "react";
import { useForm } from "react-hook-form";
import postFetchApi from "../../../../store/actions";
import Alert from "./Alert";
import "./stye.css";
const ToDoList = () => {
  const [alertIs, setAlertIs] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const api = "http://localhost:5000/api/post/add";
    const resData = await postFetchApi("post", api, data);
    setAlertIs(resData.seccuss);
    setTimeout(() => {
      setAlertIs(false);
    }, 1000);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="userName"
            placeholder="Jon"
            className={`form-control ${errors.userName ? "errors" : ""}`}
            {...register("userName", { required: true })}
          />
          <label htmlFor="userName">User Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="lastName"
            placeholder="Jon"
            className={`form-control ${errors.lastName ? "errors" : ""}`}
            {...register("lastName", { required: true })}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-floating">
          <textarea
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            className={`form-control ${errors.comment ? "errors" : ""}`}
            {...register("comment", { required: true })}
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <div className="lert-Btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {alertIs && <Alert />}
        </div>
      </form>
    </>
  );
};

export default ToDoList;
