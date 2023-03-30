import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    console.log(state,action)

    if(action.type === "INCREMENT"){
        return state+1
    }
    if(action.type === "DECREMENT"){
        return state-1
    }

    return state;
}

const Usereducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>{state}</h1>
            <button className='btn btn-success' onClick={() => dispatch({type: "INCREMENT"})}> Increment</button>
            <button className='btn btn-danger' onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
        </>
    )
}

export default Usereducer;
