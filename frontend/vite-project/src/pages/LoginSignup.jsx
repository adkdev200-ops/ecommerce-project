import React from 'react'
import "../CSS/LoginSignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='First Name'/>
           <input type='text' placeholder='Last Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
          <input type="number" placeholder='Phone no.' />
          <button>Continue</button>
        </div>
        
        <p className="loginsignup-login">
          Already have an account ? <span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup