import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Loginpic from "../images/login.png"
import { UserContext } from '../App';

const Login = () => {
   const {state, dispatch} = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    const response = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    const data = response.json()
    console.log(data);

    if (response.status === 400 || !data) {
      window.alert("invalid Creadentials")
    } else {
      dispatch({type:'USER', payload:true})
      window.alert("login successfully");
      navigate('/home');
    }
  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup_content">     
            <div className="signup_form">
              <form className='register_form' id='register_form' method='POST'>

                <div className="form_group">
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' placeholder='Enter Your Email' />
                </div>

                <div className="form_group">
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' placeholder='Enter Your Password' />
                </div>


                <div className="for-group form-button">
                  <input type="submit" name='signin' onClick={loginUser} id='signin' className='form_submit' value='Login' />
                </div>
              </form>

            </div>
            <div className="signup_image">
              <figure>
                <img src={Loginpic} alt="sign_image" />
              </figure>
              <NavLink to='/signup'
                className='signup-img-link'
                style={{ textDecoration: 'none', color: 'green' }}
              >Create An Account</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
