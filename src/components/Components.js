import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginAndRes from "./loginPage/LoginAndRes";
const Components = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isLoginMe")) {
      navigate("/login");
    } else if (localStorage.getItem("isLoginMe")) {
      navigate("/");
    }
  }, [localStorage.getItem("isLoginMe")]);
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Default page</h1>} />
        <Route path="/login" element={<LoginAndRes />} />
        <Route path="/user" element={<h1>user page</h1>} />
      </Routes>
    </>
  );
};

export default Components;
