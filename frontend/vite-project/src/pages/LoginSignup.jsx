import React, { useState } from 'react'
import "../CSS/LoginSignup.css"

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

        <h1>{action}</h1>

        <div className='loginsignup-fields'>

          {action === "Sign Up" && (
            <>
              <input type='text' placeholder='First Name' />
              <input type='text' placeholder='Last Name' />
              <input type="number" placeholder='Phone No.' />
            </>
          )}

          <input type='email' placeholder='Email Address' />
          <input type='password' placeholder='Password' />

        </div>

        <button>
          {action === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* TOGGLE TEXT */}
        {action === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setAction("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Don’t have an account?{" "}
            <span onClick={() => setAction("Sign Up")}>Sign up here</span>
          </p>
        )}

        {/* AGREEMENT only for signup */}
        {action === "Sign Up" && (
          <div className='loginsignup-agree'>
            <input type='checkbox' />
            <p>By continuing, I agree to the terms & privacy policy.</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default LoginSignup