import React, { createContext, useReducer } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import {Routes, Route, Navigate} from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
import Logout from './component/Logout';
import {reducer, initialState} from "../src/reducer/Userreducer"
// import Usereducer from './component/Usereducer';


const Routing = () => {
  return(
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='*' element={<Navigate to="/" replace/>}/>
  </Routes>
  )
}

const UserContext = createContext();

const App = () => {
  // 1 ContextApi

  const[state,dispatch] = useReducer(reducer, initialState)
  

  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar/>
    <Routing/>
    </UserContext.Provider>
    </>
  )
}

export default App;
export {UserContext};
