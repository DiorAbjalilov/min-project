import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAndRes from "./loginPage/LoginAndRes";
const Components = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Default page</h1>} />
          <Route path="/login" element={<LoginAndRes />} />
          <Route path="/user" element={<h1>user page</h1>} />
        </Routes>
      </BrowserRouter>

      {/* <ResCode /> */}
    </>
  );
};

export default Components;
