import React from "react";
import FetchedPosts from "../pageComponents/FetchedPosts";
import ToDoList from "../pageComponents/ToDoList";

const TodoList = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <ToDoList />
          </div>
          <div className="col">
            <FetchedPosts />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
