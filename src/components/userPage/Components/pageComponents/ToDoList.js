import React from "react";
import { useForm } from "react-hook-form";
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
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="userName"
            placeholder="Jon"
            {...register("userName", { required: true })}
          />
          <label for="userName">User Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Jon"
            {...register("lastName", { required: true })}
          />
          <label for="lastName">Last Name</label>
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            {...register("comment", { required: true })}
          ></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default ToDoList;
