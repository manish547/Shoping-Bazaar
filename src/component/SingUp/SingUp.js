import React from "react";
import { Link } from "react-router-dom";

import "./SingUp.css";

import { FcGoogle } from 'react-icons/fc';
import {  BsFacebook} from 'react-icons/bs';

const SingUp = () => {
  return (
    <>
      <div className="singinPage">
        <div className="singin-div">
          <div className="singin-form">
            <img src="./images/bazaar-black-sm.svg" alt="bazaar" />
            <h1>Welcome To Bazaar</h1>
            <div className="email-div">
              <label className="email-label">Full Name</label>
              <input type="text" placeholder="Manish Chhotala" className="email" />
            </div>
            <div className="email-div">
              <label className="email-label">Email Or Phone Number</label>
              <input type="email" placeholder="exmple@email.com" className="email" />
            </div>
            <div className="password-div" >
              <label className="password-label">Password</label>
              <input type="Password" placeholder="*********" className="password" />
            </div>
            <div className="password-div">
              <label className="password-label">Retype Password</label>
              <input className="password" type="text" placeholder="*********" />
            </div>
            <div className="Checkbox-div">
              <input type="Checkbox" className="checkbox"/>
              <label className="checkbox-lable">
                By Signing Up, You agree To <span>Terms & Condition</span>
              </label>
            </div>
            <button type="submit" className="btnsubmit">Create Account</button>
          </div>
          <div className="line-div">
            <div className="hr-div"><hr className="hr"></hr></div>
            <div className="or-div">Or</div>
          </div>

          <button className="facebookbtn">
            <BsFacebook />
            Continue With Facebook
            </button>

          <button className="googlebtn">
            <FcGoogle />
            Continue With Google
            </button>

            <div className="account">
                <span className="account-span">Already have an Account?</span>
                <Link to="/Login" >
                    <button className="account-sing">
                        <h6>
                            Login
                        </h6>
                    </button>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
