import React, {useReducer} from 'react';
import {Component} from './style';
import {peopleReducer} from '../../views/homes'
const Counter = ({type,value})=>{
    const [people, peopleDispatch] = useReducer(peopleReducer,value);
    // peopleDispatch({upAndDown : "init"})
    return (
    <Component>
        <div>
            {people.name}
        </div>
        <div>
            <button onClick={()=>{peopleDispatch({upAndDown:"down",type})}}>-</button>
            <span>{people.count}</span>
            <button onClick={()=>{peopleDispatch({upAndDown:"up",type})}}>+</button>
        </div>
    </Component>
    );
}

export default Counter;