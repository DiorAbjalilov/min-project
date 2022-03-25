import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginAndRes from "./loginPage/LoginAndRes";
import MainLayout from "./userPage/Components/layout/MainLayout";
import Blank from "./userPage/Components/pages/Blank";
import Dashboard from "./userPage/Components/pages/Dashboard";
import "./userPage/Components/assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./userPage/Components/scss/App.scss";
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
        <Route path="/login" element={<LoginAndRes />} />
        <Route path="/user" element={<h1>user page</h1>} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="todo" element={<Blank />} />
          <Route path="gallery" element={<Blank />} />
          <Route path="settings" element={<Blank />} />
        </Route>
      </Routes>
    </>
  );
};

export default Components;
