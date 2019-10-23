import React, {useContext} from 'react';
import {RoomTypeContext} from '../../views/homes/index'
import {TypeComponent} from './style';

const AccommodationType =  (props)=>{
    const {roomType,roomTypeDispatch} = useContext(RoomTypeContext);
    return(
        <TypeComponent>
          <div>
            <input type="checkbox" name={props.value} onChange={(e)=>{roomTypeDispatch({name : e.target.name, value : e.target.checked})}}></input>
          </div>
          <div>
            <div>{props.title}</div>
            <div>{props.content}</div>
          </div>
        </TypeComponent>
    );
}

export default AccommodationType;