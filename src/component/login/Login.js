import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from 'react-icons/fc';
import {  BsFacebook} from 'react-icons/bs';

const Login = () => {
  return (
    <>
      <div>
        <div>
          <form>
            <img src="./images/bazaar-black-sm.svg" alt="bazaar" />
            <h1>Welcome To Bazaar</h1>
            <div>
              <label>Email Or Phone Number</label>
              <input type="email" placeholder="exmple@email.com" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="*******" />
            </div>
            <button type="submit">Login</button>
          </form>

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
                <span>Don't Have Account?</span>
                <Link to="/SingUp" >
                    <button>
                        <h6>
                            Sing up
                        </h6>
                    </button>
                </Link>
            </div>
            <div>
                <span>Forgot Your Password</span>
                <Link to="/Reset" >
                    <button>
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
