import React from 'react'
import './login.css'

const Loginpage = () => {
    const submitForm =(e)=>{
  e.preventDefault();
    }
  return (
    <div>
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={submitForm}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
         <p><a href="">forget password</a></p>
        <button className="loginButton">Login</button>
        <br />
        <p>Don't have an Account ?</p>
        <button className="loginRegisterButton">Register</button>
      </form>
       
    </div>
    </div>
  )
}

export default Loginpage