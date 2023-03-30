import React, { useState, useEffect } from 'react';
import Phonepic from "../images/phone.png"
import Emailpic from "../images/email.webp"
import Addresspic from "../images/address.png"

const Contact = () => {

  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })

  const userContact = async () => {
    try {
      const response = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await response.json();
      console.log(data);
      setUser({...user, name:data.name, email:data.email, phone:data.phone});

      if (response.status !== 200) {
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    userContact()
  }, [])

  // we are storing data in states
  const handleInput = (event) => {
    const name = event.target.value;
    const value = event.target.value;
    setUser({...user, [name]:value });
  }

  // send data to backened

  const contactForm = async(e) => {
    e.preventDefault();

    const{name,email,phone,message} = user;

    const response = await fetch('/contact', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,message
      })
    })
    const data = await response.json();
    console.log(data)

    if(!data){
      console.log("message not send")
    }else{
      alert("Message sent successfully")
      setUser({...user, message:""})
    }
  }


  return (
    <>
      <div className="contact_info mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-12 offset-lg-1 d-flex justify-content-between">
              {/* Phone Number */}
              <div className="contact_item phone_item d-flex justify-content-start align-items-center text-align-center flex-column order-0">
                <img src={Phonepic} alt="phone" />
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_text">
                  +91 950318852
                </div>
              </div>
              <div className="contact_item address_item d-flex justify-content-center align-items-center text-align-center flex-column order-1">
                <img src={Addresspic} alt="Address" />
                <div className="contact_info_title text-center">
                  Address
                </div>
                <div className="contact_info_text">
                  Bhopal Ashoka Garden-423412
                </div>
              </div>
              {/* Email */}
              <div className="contact_item email_item d-flex justify-content-start align-items-center text-align-center flex-column order-2 flex-row">
                <img src={Emailpic} alt="email" />
                <div className="contact_info_title">
                  Email
                </div>
                <div className="contact_info_text">
                  phritik06@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_conatainer my-5 py-4">
                <div className="contact_form_title">
                  Get In Touch
                </div>
                <form id='contact_form' method='POST'>
                  <div className="contact_form_name d-flex justify-content-between align-items-center">
                    <input type="text" id='contact_form_name' className='contact_form-name input_field m-3' placeholder='Your Name' value={user.name}
                      onChange={handleInput}
                      name='name'
                      required='true' />

                    <input type="email" id='contact_form_email' className='contact_form-email input_field m-3' placeholder="Your Email" value={user.email}
                      onChange={handleInput}
                      name='email'
                      required='true' />

                    <input type="number" id='contact_form_phone' className='contact_form-phone input_field m-3' placeholder='Your Number' value={user.phone}
                      onChange={handleInput}
                      name='phone'
                      required='true' />
                  </div>

                  <div className="contact_form_text m-3">
                    <textarea className="text_field contact_form_message"
                      value={user.message}
                      onChange={handleInput}
                      name='message'
                      id=""
                      cols="80"
                      rows="5"
                      placeholder='Enter Your message'></textarea>
                  </div>
                  <div className="contact_form_btn">
                    <button type='submit' onClick={contactForm} className='button contact_submit'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
