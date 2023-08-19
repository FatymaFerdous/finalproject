import React from 'react'
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <>
    <div className="login-box">
  <form>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <center>
      <a href="#">
        SIGN UP
        <span />
      </a>
    </center>
  </form>
  <p className="signup-link">
              Already have account? 
              <Link to={`/login`}> login</Link>
            </p>
</div>

    </>
  )
}
