import React from "react";
import Input from "../../component/Input";
import { Button, ButtonComponent, Component } from "./style";

const user = {
  id: "",
  password: ""
};

export const userReducer = (state, action) => {
  console.log(user);
  switch (action.name) {
    case "id":
      user.id = action.value;
      break;
    case "password":
      user.password = action.value;
      break;
  }
};

const Login = () => {
  return (
    <Component>
      <div>
        <div>Boostcamp Login</div>
      </div>
      <div>
        <Input type={"text"} name={"id"}></Input>
      </div>
      <div>
        <Input type={"password"} name={"password"}></Input>
      </div>
      <ButtonComponent>
        <Button onClick={sendRequest}>로그인</Button>
        <Button>회원가입</Button>
      </ButtonComponent>
    </Component>
  );
};

const sendRequest = async (query) => {
  const result = await fetch("http://localhost:3333/api", {
    method: "post",
    body: JSON.stringify({
      query: `
        query{
            checkUserIdAndPassword(user_id:"${user.id}",password:"${user.password}"){
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
  localStorage.setItem("token",data.checkUserIdAndPassword.token);
  // history.pushState(null,null,"/");
};

export default Login;
