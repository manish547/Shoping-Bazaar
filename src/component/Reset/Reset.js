import React from 'react'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <>
    <div>
      <div>
        <h1>Reset Your Password</h1>
        <div>
         <form>
          <input type='email' placeholder='Email' />
          <button type='submit'>Reset</button>
        </form> 

        </div>
        <div>
                <span>Don't Have Account</span>
                <Link to="/SingUp" >
                    <button>
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