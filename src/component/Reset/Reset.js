import React from 'react'
import { Link } from 'react-router-dom'

import "./Reset.css"


var buttons = document.getElementsByClassName('btnn');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}


const Reset = () => {

 

  return (
    <>
    <div className="resetPage1">
      <div className="reset-div1">
         <form className="reset-form1">
        <h1>Reset Your Password</h1>
        <div className="email-div1">
          <input type='email' placeholder='Email'  className="email1" />
          <button className='btnn'> test 1</button>
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