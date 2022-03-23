import React from "react";
import "./login.css";
import { useFormik } from "formik";
import axios from "axios";

const validate = (values) => {
  const errors = {};
  if (values.firstName) {
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length < 5) {
      errors.firstName = "Must be 5 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or less";
    }
  } else {
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or less";
    }
  }

  return errors;
};

const LoginPage = ({ ClickHandleSubmit, displayNone }) => {
  const ClickHandleSignUp = () => {
    const container = document.querySelector("#container");
    container.classList.add("right-panel-active");
  };
  const ClickHandleSignIn = () => {
    const container = document.querySelector("#container");
    container.classList.remove("right-panel-active");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      const api = "https://localhost:5000/api/user/sendemail";
      const data = await axios.post(api, {
        email: values.email,
      });
      console.log(data);
      alert(JSON.stringify(values, null, 2));
    },
  });

  // 2
  const formikSigin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div
        className="bodyLogin"
        style={{ display: displayNone ? "none" : "flex" }}
      >
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={formik.handleSubmit}>
              <h1>Create Account</h1>

              <span>or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={`${formik.errors.firstName ? "error" : ""}`}
              />
              <input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={`${formik.errors.email ? "error" : ""}`}
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className={`${formik.errors.password ? "error" : ""}`}
              />
              <button type="submit" onClick={ClickHandleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={formikSigin.handleSubmit}>
              <h1>Sign in</h1>
              <span>or use your account</span>
              <input
                type="email"
                placeholder="Email"
                id="email1"
                name="email"
                onChange={formikSigin.handleChange}
                value={formikSigin.values.email}
                className={`${formikSigin.errors.email ? "error" : ""}`}
              />
              <input
                type="password"
                placeholder="Password"
                id="password1"
                name="password"
                onChange={formikSigin.handleChange}
                value={formikSigin.values.password}
                className={`${formikSigin.errors.password ? "error" : ""}`}
              />
              <a href="#">Forgot your password?</a>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={ClickHandleSignIn}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={ClickHandleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
