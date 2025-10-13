import React from 'react'
import './Login.css';
import { useState } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
const Login = ({setshowlogin}) => {
    const [currentstate,setcurrent]=useState("Signup");
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h3>{currentstate}</h3>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {currentstate == "Signup" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>{currentstate == "Signup" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currentstate == "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrent("Signup")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrent("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login