import React from "react";
import { Link } from "react-router-dom";

import "./Login.css"

import { FcGoogle } from 'react-icons/fc';
import {  BsFacebook} from 'react-icons/bs';

const Login = () => {
  return (
    <>
      <div className="loginPage">
        <div className="login-div">
          <form className="login-form">
            <img src="./images/bazaar-black-sm.svg" alt="bazaar" />
            <h1>Welcome To Bazaar</h1>
            <div className="email-div">
              <label className="email-label">Email Or Phone Number</label>
              <input type="email" placeholder="exmple@email.com"  className="email"/>
            </div>

            <div className="password-div">
              <label className="password-label">Password</label>
              <input type="password" placeholder="*******" className="password"/>
            </div>
            <button type="submit" className="btnsubmit">Login</button>
          </form>

          <div className="line-div">Or</div>

          <button className="facebookbtn">
            <BsFacebook />
            Continue With Facebook
            </button>

          <button className="googlebtn">
            <FcGoogle />
            Continue With Google
            </button>

            <div className="account">
                <span className="account-span">Don't Have Account?</span>
                <Link to="/SingUp" >
                    <button className="account-sing">
                        <h6>
                            Sing up
                        </h6>
                    </button>
                </Link>
            </div>
            <div className="forgetPassword-div">
                <span className="forgetPassword-span">Forgot Your Password</span>
                <Link to="/Reset" >
                    <button className="reset">
                        <h6>
                            Reset It
                        </h6>
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
