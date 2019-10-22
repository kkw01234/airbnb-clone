import React from 'react';
import {Container} from './style'

const Modal = (props) =>{
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