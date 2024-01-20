import React from "react";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import "./Signin.css";

const Signin = () => {
  return (
    <div>
      <div className="signin-all">
        <div className="signinwrap">
          <h2>Log in</h2>
          <form>
            <div className="signin_text">
              <input type="text" placeholder="Email" />
              <div className="password">
                <input type="password" placeholder="Password" />
                <IoEye className="icon" />
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="logged in">Keep me logged in</label>
              <a href="#sasa" className="forgot">
                Forgot password?
              </a>
            </div>
          </form>
          <Link to="/">
            <button>Log In</button>
          </Link>
          <div className="register_account">
            <p>Don't have an account?</p>
            <a href="#sas">Rigister</a>
          </div>
          <div className="signin_terms">
            <a href="#Term of use" className="href1">
              Terms of Use
            </a>
            <a href="Privacy Policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
