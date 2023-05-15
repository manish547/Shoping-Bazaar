import React from 'react'
import { Link } from 'react-router-dom'

import "./Reset.css"

const Reset = () => {
  return (
    <>
    <div className="resetPage1">
      <div className="reset-div1">
         <form className="reset-form1">
        <h1>Reset Your Password</h1>
        <div className="email-div1">
          <input type='email' placeholder='Email'  className="email1" />
          <button type='submit' className="btnsubmit1">Reset</button>
        </div>
        </form> 

        <div className="account1">
                <span className="account-span1">Don't Have Account</span>
                <Link to="/SingUp" >
                    <button className="account-sing1">
                        <h6>
                            Sing Up
                        </h6>
                    </button>
                </Link>
            </div>
      </div>
    </div>
    </>
  )
}

export default Reset