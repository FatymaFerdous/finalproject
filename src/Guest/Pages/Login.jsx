import React, { useContext, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { GlobalContext } from "../../Context/context";
import { Link } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { state, dispatch } = useContext(GlobalContext)

    const loginUser = (e) => {
        e.preventDefault();

        const payload = { email, password }

        axios.post('http://localhost:2800/api/login', payload)
            .then((json) => {
                Cookies.set('token', json.data.token)
                dispatch({
                    type: "USER_LOGIN",
                    token: json.data.token
                })

            })
            .catch(err => console.log(err))

    }


  return (
    <>
      <div className="login-box">
        <form onSubmit={loginUser}>
          <div className="user-box">
            <input
             type="email"
              name="email" 
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            <label>Email</label>

          </div>
          <div className="user-box">
            <input
             type="password" 
             name="password" 
             required="" 
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />
            <label>Password</label>
          </div>
          <center>
          <button className='btn btn-dark'>
              LOGIN
              </button>
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
