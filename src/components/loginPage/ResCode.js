import React from "react";
import "./sendcode.css";
import { useFormik } from "formik";
import ApiController from "../fetchApiController/fetchApiController";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};
  if (!values.sendCode) {
    errors.sendCode = "Required";
  } else if (values.sendCode.length > 2) {
    errors.sendCode = "Must be 5 characters or less";
  }
  return errors;
};

const ResCode = ({ displayNone }) => {
  let navigate = useNavigate();

  // toastify
  const notify = () => toast.error("The code did not match");

  // user send code and register
  const formik = useFormik({
    initialValues: {
      sendCode: "",
    },
    validate,
    onSubmit: async (values) => {
      const myData = JSON.parse(localStorage.getItem("myData"));
      const api = "http://localhost:5000/api/user/sigin";
      const data = {
        username: myData.username,
        email: myData.email,
        password: myData.password,
        emailCode: values.sendCode,
      };
      const ResData = await ApiController("post", api, data);
      console.log(ResData.data);
      if (ResData.data.success) {
        localStorage.setItem("isLoginMe", JSON.stringify(ResData.data.data));
        navigate("/");
      }
      if (!ResData.data.success) {
        notify();
      }
    },
  });

  return (
    <>
      <ToastContainer />
      <div
        className="bodyCode"
        style={{ display: displayNone ? "block" : "none" }}
      >
        <div className="containerCode">
          <div className="top-header">
            <div className="time-reset">
              <h1>
                {/* {timeHourVaule > 0 && timeSecound > 0
                  ? "00:00"
                  : `0${timeHourVaule}:${
                      timeVaule.toString().length > 1
                        ? timeVaule
                        : `0${timeVaule}`
                    }`} */}
              </h1>
              <i className="bx bx-revision"></i>
            </div>
            <p>Enter the confirmation code sent to the email</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="user">
              <input
                type="number"
                placeholder="Enter number"
                id="sendCode"
                name="sendCode"
                onChange={formik.handleChange}
                value={formik.values.sendCode}
                className={`${formik.errors.sendCode ? "error" : ""}`}
              />
            </div>
            <div className="btn">
              <button type="submit">Confirmation</button>
            </div>
          </form>
        </div>
        {/* <p className="last">
          паролни унутдим? <a href="#">Паролни кайта тиклаш</a>
        </p> */}
      </div>
    </>
  );
};

export default ResCode;
