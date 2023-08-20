import axios from 'axios'
import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie'
import { GlobalContext } from "../../Context/context";

import { Link } from "react-router-dom";


export default function Signup() {

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { state, dispatch } = useContext(GlobalContext)

  const SignupUser = (e) => {
    e.preventDefault();
    const payload = { email, password, username };
  
    axios.post('http://localhost:2800/api/signup', payload)
      .then((json) => {
        Cookies.set('token', json.data.token);
        dispatch({
          type: "USER_SIGNUP",
          token: json.data.token
        });
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <div className="login-box">
        <form onSubmit={SignupUser}>
          <div className="user-box">
            <input
              type="name"
              name="Username"
              placeholder="Name"
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required=""
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required="" />
            <label>Password</label>
          </div>
          <center>
            <button className='btn btn-dark'>
              SIGNUP
            </button>
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
