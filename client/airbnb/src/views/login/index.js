import React, { useReducer, useRef } from "react";
// import Input from "../../component/Input";
import { Button, ButtonComponent, Component } from "./style";
// import { userReducer } from "./reducer";




const Login = (props) => {

  const inputId = useRef(null);
  const inputPassword = useRef(null);
  const sendRequest = async (query) => {
    console.log(inputId.current.value,inputPassword.current.value)
    const result = await fetch("http://localhost:3333/api", {
      method: "post",
      body: JSON.stringify({
        query: `
          query{
              checkUserIdAndPassword(user_id:"${inputId.current.value}",password:"${inputPassword.current.value}"){
                  token
              }
          }`
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization" : "Bearer "+localStorage.getItem("token")
      },
      
    });
    const {data} = await result.json();
    console.log(data);
    if(!data.checkUserIdAndPassword){
      alert("아이디 또는 비밀번호를 확인해주세요");
      return;
    }
     
    localStorage.setItem("token",data.checkUserIdAndPassword.token);
    props.history.push("/homes");
  };

  return (
    <Component>
      <div>
        <div>Boostcamp Login</div>
      </div>
      <div>
        <input type="text" ref={inputId}></input>
      </div>
      <div>
        <input type="password" ref={inputPassword}></input>
      </div>
      <ButtonComponent>
        <Button onClick={sendRequest}>로그인</Button>
        <Button>회원가입</Button>
      </ButtonComponent>
    </Component>
  );
};



export default Login;
