import React, {useReducer} from 'react';
import {userReducer} from '../../views/login/index'
const Input = (props)=>{
    const [user, dispatchUser] = useReducer(userReducer,{
        id :null,
        password : null
    });
    return (
    <>
        <input type={props.type} onBlur={event =>dispatchUser({name : props.name, value : event.target.value})}></input>
    </>
    )
}

export default Input;