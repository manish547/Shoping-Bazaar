import React, { useRef } from "react";
import "./Reset.css"
import { Link } from "react-router-dom";

const Reset = () => {
const btnref = useRef(null)
  
const handleClick = (e) => {
  e.preventDefault()
  const {current} = btnref
      const x = e.clientX;
      const y = e.clientY;

      const buttonTop = e.target.offsetTop;
      const buttonLeft = e.target.offsetLeft;

      const xInside = x - buttonLeft;
      const yInside = y - buttonTop;

      const circle = document.createElement("span");
      circle.classList.add("circle");
      circle.style.top = yInside + "px";
      circle.style.left = xInside + "px";

      current.appendChild(circle);

      setTimeout(() => circle.remove(), 500);
    }

  return (
    <>
      <div className="resetPage1">
        <div className="reset-div1">
          <form className="reset-form1" >
            <h1>Reset Your Password</h1>
            <div className="email-div1">
              <input type='email' placeholder='Email' className="email1" />
              <button className='btnnn ripple ' ref={btnref} onClick={(e) => handleClick(e)} >Reset</button>
            </div>
          </form>

          <div className="account1">
            <span className="account-span1">Don't Have Account</span>
            <Link to="/SingUp">
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
  );
};

export default Reset;