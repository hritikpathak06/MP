import React from "react"
import  {useState, useEffect} from 'react'

const Home = () => {

  const [username, setUsername] = useState('')
  const[show,setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const response = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const data = await response.json();
      console.log(data);
      setUsername(data.name);
      setShow(true)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    userHomePage()
  }, [])

  return (
    <>
      <div className='home_page'>
        <div className="home_div">
          <p className='pt-5'>Welcome</p>
          <h1 style={{color:"blueviolet"}}>{username}</h1>
          <h1> { show ?'Happy to see You Back':"We Are The Mern Developer"}</h1>
        </div>
      </div>
    </>
  )
}

export default Home
