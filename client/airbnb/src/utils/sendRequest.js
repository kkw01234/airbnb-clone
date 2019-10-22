const sendRequest = async query => {
  const result = await fetch("http://localhost:3333/api", {
    method: "post",
    body: JSON.stringify({
      query
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const { data } = await result.json();
  return data;
  // localStorage.setItem("token",data.checkUserIdAndPassword.token);
};

export default sendRequest;