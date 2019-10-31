import React, {useReducer} from 'react';
// import {userReducer} from '../../views/login/reducer'
const Input = (props)=>{
    return (
    <>
        <input type={props.type} onBlur={event =>console.log(event)}></input>
    </>
    )
}

export default Input;