import { useRef } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault(); 

    const button = buttonRef.current;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${e.clientY - button.offsetTop - radius}px`;
    button.appendChild(ripple);
    setTimeout(() => {
      button.removeChild(ripple);
    }, 600);
  };

  return (
    <>
      <div className="resetPage1">
        <div className="reset-div1">
          <form className="reset-form1">
            <h1>Reset Your Password</h1>
            <div className="email-div1">
              <input type='email' placeholder='Email' className="email1" />
              <button className='btnn' onClick={handleClick} ref={buttonRef}>test 1</button>
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