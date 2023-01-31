import { React, useState } from "react";
import logo from "../images/logo.png";
import signin from "../images/signin.png";
import "../styles/Login.scss";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-img">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="illustration">
            <img src={signin} alt="logo" />
          </div>
        </div>
        <div className="login-signin">
          <div className="container">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <input type="email" placeholder="Email" />
            <div className="password">
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                style={{ paddingLeft: "16px" }}
              />
              <span onClick={togglePassword}>SHOW</span>
            </div>
            <span>FORGOT PASSWORD?</span>
            <div className="btn">
              <a href="/Dashboard">
                <button type="button" className="btn">
                  Log in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
