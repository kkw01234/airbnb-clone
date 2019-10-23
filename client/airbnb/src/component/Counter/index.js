import React, {useReducer,useContext} from 'react';
import {Component,Button} from './style';
// import {countPeopleReducer} from '../../views/homes/reducer';
import {CountPeopleContext} from '../../views/homes/index';
const Counter = ({type,value})=>{
    const {countPeople,countPeopleDispatch} = useContext(CountPeopleContext);
    console.log(countPeople)
    return (
    <Component>
        <div>
            {value.name}
        </div>
        <div>
            <Button onClick={()=>{countPeopleDispatch({upAndDown:"down",type})}}>-</Button>
            <span>{countPeople[type]}</span>
            <Button onClick={()=>{countPeopleDispatch({upAndDown:"up",type})}}>+</Button>
        </div>
    </Component>
    );
}

export default Counter;