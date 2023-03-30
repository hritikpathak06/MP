import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Logout = () => {
    // const Alert = () => {
    //     alert("hello World")
    // }
    const { state, dispatch } = useContext(UserContext);

    //  Promises
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            Credential: 'include'
        })
            .then((res) => {
                navigate('/login', { replace: true })
                dispatch({type:'USER', payload:false})
                if (res !== 200) {
                    throw new Error(res.error)
                }
            })
            .catch((err) => {
                console.log(err)
            });
    })


}

export default Logout
