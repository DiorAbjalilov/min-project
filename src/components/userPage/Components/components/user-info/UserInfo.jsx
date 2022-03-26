import React from "react";
import "./user-info.scss";

const UserInfo = ({ user }) => {
  if (localStorage.getItem("isLoginMe")) {
    var userName = JSON.parse(localStorage.getItem("isLoginMe")).username;
  }
  return (
    <div className="user-info">
      <div className="user-info__img">
        <img src={user.img} alt="" />
      </div>
      <div className="user-info__name">
        <span>{userName}</span>
      </div>
    </div>
  );
};

export default UserInfo;
