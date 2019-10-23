import React, {useState} from 'react';
import {Container} from './style'

const Modal = (props) =>{
    // const [data, setData] = useState("data");
    return (
    <>
        <Container>
            <div className="modal-title">{props.title}</div>
            <div className="modal-content">{props.content}</div>
        </Container>
    </>
    );
}
export default Modal;