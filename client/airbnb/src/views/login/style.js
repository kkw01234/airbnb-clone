import React from 'react';
import styled, {css} from 'styled-components';


const Component = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    
`

const ButtonComponent = styled.div`
    display :flex;
    justify-content :center;
`



const Button = styled.button`
    background-color : #ff777b;
    color : white;
    border-radius : 0.2rem;
    border : 0.1rem solid black;
    margin : 0.3rem;
`


export {
    Button,
    ButtonComponent,
    Component
}