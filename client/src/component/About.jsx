import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Ritikpic from "../images/hritik.jpeg";
import Personpic from "../images/person.jpg"

const About = () => {
  
  const navigate = useNavigate();
  const[user, setUser] = useState({});

  const callAboutPage = async() => {
    try {
      const response = await fetch('/about',{
        method:"GET",
        headers:{
           Accept:"application/json",
           "Content-Type":"application/json"
        },
        credentials:"include",
      })
      const data = await response.json();
      console.log(data);
      setUser(data);

      if(response.status !== 200){
        const error = new Error(response.error);
        throw error;
      }
    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  }

  useEffect(() => {
    callAboutPage()
  }, [])

  return (
    <>
      <div className="container emp_profile mt-5 order-0">
        <form method='' >
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-md-4 order-0 col-12">
              <img src={user.name === "Ritik Kumar pathak" ? Ritikpic:Personpic} alt="ritik" className='profile_pic' />
            </div>
            <div className="col-md-6">
              <div className="profile_head mt-5 order-1">
                <h5>{user.name}</h5>
                <h6>{user.work}</h6>
                <p className='profile_rating mt-3 mb-5'> Ranking: <span> 10/10</span></p>

                <ul class="nav" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role='tab'>About</a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role='tab'>Timeline</a>
                  </li> */}
                </ul>
              </div>

            </div>
            {/* <div className="col-md-2">
              <input type="text" className='profile-edit-btn btnAddMore' value="Edit profile" />
            </div> */}
          </div>
          <div className="row">
            {/* ledt side url */}
            <div className="col-md-4 order-1">
              <div className="profile_work">
                <h4>MY PROJECTS</h4>
                <a href="https://github.com/hritikpathak06" rel="noreferrer" target="_blank">Github</a><br />
                <a href="https://github.com/hritikpathak06" rel="noreferrer" target="_blank">Github</a><br />
                <a href="https://github.com/hritikpathak06" rel="noreferrer" target="_blank">Github</a><br />
                <a href="https://github.com/hritikpathak06" rel="noreferrer" target="_blank">Github</a><br />
                <a href="https://github.com/hritikpathak06" rel="noreferrer" target="_blank">Github</a><br />
              </div>
            </div>
            {/* Right side data toggle */}
            <div className="col-md-8 pl-5 about_info mt-3">
              <div className="tab-content profile-tab" id='mytabcontent'>
                <div className="tab-pane fade show active" id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="User ID">
                        User ID
                      </label>
                    </div>
                    <div className="col-md-6">
                      <p style={{color:"blue"}}>{user._id}</p>
                    </div>
                  </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="User ID">
                      Name
                    </label>
                  </div>
                  <div className="col-md-6">
                    <p style={{color:"blue"}}>{user.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="User ID">
                     Email
                    </label>
                  </div>
                  <div className="col-md-6">
                    <p style={{color:"blue"}}>{user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="User ID">
                      Phone
                    </label>
                  </div>
                  <div className="col-md-6">
                    <p style={{color:"blue"}}>{user.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="User ID">
                      Work
                    </label>
                  </div>
                  <div className="col-md-6">
                    <p style={{color:"blue"}}>{user.work}</p>
                  </div>
                </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default About
