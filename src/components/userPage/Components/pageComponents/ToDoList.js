import React from "react";
import { useForm } from "react-hook-form";
import "./stye.css";
const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ToDoList;
