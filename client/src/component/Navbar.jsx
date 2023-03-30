import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { UserContext } from '../App';






const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);

    const Rendermenu = () => {
        if (state) {
            return (

                <>
                    <li className="nav-item">
                        <NavLink className="nav-link " style={{ textDecoration: 'none' }} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/contact">Contact</NavLink>
                    </li>

                    {/* <li className="nav-item">
                    <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/signup">Register</NavLink>
                </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/logout">Logout</NavLink>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link " style={{ textDecoration: 'none' }} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/contact">Contact</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/signup">Register</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link" style={{ textDecoration: 'none' }} to="/logout">Logout</NavLink>
                    </li> */}



                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" style={{ textDecoration: 'none', color: 'red', fontSize: '2rem' }} to="#">
                        <img src={Logo} alt="logo.png" />
                        iCoder
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <Rendermenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
