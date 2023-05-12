import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc';
import {  BsFacebook} from 'react-icons/bs';

const SingUp = () => {
  return (
    <>
      <div>
        <div>
          <from>
            <img src="./images/bazaar-black-sm.svg" alt="bazaar" />
            <h1>Welcome To Bazaar</h1>
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Manish Chhotala" />
            </div>
            <div>
              <label>Email Or Phone Number</label>
              <input type="email" placeholder="exmple@email.com" />
            </div>
            <div>
              <label>Password</label>
              <input type="Password" placeholder="*********" />
            </div>
            <div>
              <label>Retype Password</label>
              <input type="text" placeholder="*********" />
            </div>
            <div>
              <input type="Checkbox" />
              <label>
                By Signing Up, You agree To <span>Terms & Condition</span>
              </label>
            </div>
            <button type="submit">Create Account</button>
          </from>
          <div>Or</div>

          <button>
            <BsFacebook />
            Continue With Facebook
            </button>

          <button>
            <FcGoogle />
            Continue With Google
            </button>

            <div>
                <span>Already have an Account?</span>
                <Link to="/Login" >
                    <button>
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
