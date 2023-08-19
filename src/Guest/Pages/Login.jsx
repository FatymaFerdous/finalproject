import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="login-box">
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <center>
            <a href="#">
              LOGIN
              <span />
            </a>
          </center>
        </form>
        <p className="signup-link">
              No account? 
              <Link to={`/signup`}> Sign up</Link>
            </p>
      </div>

    </>
  )
}
