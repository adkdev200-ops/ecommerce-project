import API from "../utils/api";
import React, { useState } from 'react'

import { useNavigate } from "react-router-dom"
import "../CSS/LoginSignup.css"

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {

      // ✅ FIXED endpoints
      const url =
        action === "Sign Up"
          ? "/api/signup/"
          : "/api/token/";   


      const data =
        action === "Sign Up"
          ? {
              first_name: formData.firstName,
              last_name: formData.lastName,
              phone_number: formData.phone,
              email: formData.email,
              password: formData.password
            }
          : {
              phone_number: formData.phone,
              password: formData.password
            };

      const response = await API.post(
        "http://127.0.0.1:8000" + url,
        data
      );

      console.log("Response:", response.data);

      
      if (action === "Login") {
        const access = response.data.access;
        const refresh = response.data.refresh;

        if (access && refresh) {
          localStorage.setItem("accessToken", access);
          localStorage.setItem("refreshToken", refresh);

          // 
          navigate("/dashboard");
        }
      }

      alert(`${action} Successful!`);

    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
      alert("Error occurred");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">

        <h1>{action}</h1>

        <div className='loginsignup-fields'>

          {action === "Sign Up" && (
            <>
              <input name="firstName" type='text' placeholder='First Name' onChange={handleChange}/>
              <input name="lastName" type='text' placeholder='Last Name' onChange={handleChange}/>
              <input name="email" type="email" placeholder='Email Address.' onChange={handleChange}/>
            </>
          )}

          <input name="phone" type='number' placeholder='Phone No.' onChange={handleChange}/>
          <input name="password" type='password' placeholder='Password' onChange={handleChange}/>

        </div>

        <button onClick={handleSubmit}>
          {action === "Sign Up" ? "Create Account" : "Login"}
        </button>

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

export default LoginSignup;