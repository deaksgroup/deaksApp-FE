import React, { useState } from "react";
import axios from "axios";
import "./styles/login.css";

import { useNavigate } from "react-router-dom";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
const LoginForm = () => {
  const notify = (message) => {
    alert(message);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };

    axios
      .post("http://localhost:5002/api/userLogin", {
        email,
        password,
      })
      .then(function(res) {
        localStorage.setItem("JWtToken", res.data.token);
        localStorage.setItem("roles", res.data.user.roles);
        localStorage.setItem("email", res.data.user.email);
        navigate("/home");
        notify("User signin successful");
      })
      .catch(function(error) {
        notify("User signin failed");
      });
  };

  return (
    <React.Fragment>
      {" "}
      <div className=" formWrapper">
        <div className="form-signin">
          <form onSubmit={onLogin}>
            <img
              className="mb-4"
              src={require("./assets/logo.jpg")}
              alt=""
            ></img>
            <h1 className=" signinHeading">Sign in</h1>

            <div className="form-floating">
              <label htmlFor="floatingInput">Username</label>
              <input
                type="text"
                value={email}
                onChange={emailChangeHandler}
                className="form-control"
                id="floatingInput"
                placeholder="Username"
              ></input>
            </div>
            <div className="form-floating">
              <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                onChange={passwordChangeHandler}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
              ></input>
            </div>

            <div className="my-4"></div>
            <button className="w-100 btn btn-lg  loginButton" type="submit">
              Sign In
            </button>
            <p className="mt-4 text-center mb-3 text-muted">
              &copy;DeaksApp 2022
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginForm;
