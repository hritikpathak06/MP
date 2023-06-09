import React, { useState } from 'react';
import Signpic from "../images/signup.png";
import { NavLink, useNavigate, } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]:value})

  }

  const postData = async(e) => {
     e.preventDefault();
     const {name, email, phone, work, password, cpassword} = user;
     const response = await fetch('/register', {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name, email, phone, work, password, cpassword})
    })
     const data = await response.json();
     console.log(data)

     if(response.status === 422 || !data){
      window.alert("Inavlid Registration")
      console.log("Invalid registration")
     }else{
      window.alert(" Registration Successfull")
      console.log(" Registration successfull")
       
      navigate("/login")
      
     }
  }

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup_content">
            <div className="signup_form">
              <form method='POST' className='register_form' id='register_form'>
                <div className="form_group">
                  <label htmlFor='name'>
                    <i class="zmdi zmdi-account icons-name"></i>
                  </label>
                  <input type="text" name='name' id='name' autoComplete='off'
                    value={user.name}
                    onChange={handleInputs}
                    placeholder='Enter Your Name' />
                </div>
                <div className="form_group">
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email icons-name"></i>
                  </label>
                  <input type="email" name='email' id='email' autoComplete='off'
                    value={user.email}
                    onChange={handleInputs}
                    placeholder='Enter Your Email' />
                </div>
                <div className="form_group">
                  <label htmlFor='phone'>
                    <i class="zmdi zmdi-phone icons-name"></i>
                  </label>
                  <input type="number" name='phone' id='phone' autoComplete='off'
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder='Enter Your Number' />
                </div>
                <div className="form_group">
                  <label htmlFor='work'>
                    <i class="zmdi zmdi-slideshow icons-name"></i>
                  </label>
                  <input type="text" name='work' id='work' autoComplete='off'
                    value={user.work}
                    onChange={handleInputs}
                    placeholder='Enter Your Profession' />
                </div>
                <div className="form_group">
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock icons-name"></i>
                  </label>
                  <input type="password" name='password' id='password' autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}
                    placeholder='Enter Your Password' />
                </div>
                <div className="form_group">
                  <label htmlFor='cpassword'>
                    <i class="zmdi zmdi-lock icons-name"></i>
                  </label>
                  <input type="password" name='cpassword' id='cpassword' autoComplete='off'
                    value={user.cpassword}
                    onChange={handleInputs}
                    placeholder='Confirm Your password' />
                </div>

                <div className="for-group form-button">
                  <input type="submit" name='signup' id='signup' className='form_submit' onClick={postData} value='register' />
                </div>
              </form>
              <div className="signup_image">
                <figure>
                  <img src={Signpic} alt="sign_image" />
                </figure>
                <NavLink to='/login'
                  className='signup-img-link'
                  style={{ textDecoration: 'none', color: 'red' }}
                >I Am Already Registered</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup
