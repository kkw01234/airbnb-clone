const axios = require("axios");
const LocalStorage = require("node-localstorage").LocalStorage;
const localStorage = new LocalStorage("./scratch");
const require = require('supertest');
describe('jwt test', ()=>{
    // const agent = request.agent()
    test("delete test", async () => {
        const response = await axios({
          url: "http://localhost:3333/api",
          method: `post`,
          data: {
            query: `
                              query{
                                  checkUserIdAndPassword(user_id:"1234",password:"12345678"){
                                      token
                                  }
                              }
                              `
          }
        });
        expect(response.data.data.checkUserIdAndPassword.token).toBeTruthy()
        localStorage.setItem(
          "token",
          response.data.data.checkUserIdAndPassword.token
        );
        axios.default.defaults.headers.common["Authorization"] =
          `Bearer ` + localStorage.getItem("token");
      
        const response2 = await axios({
          url: "http://localhost:3333/api",
          method: `post`,
          data: {
            query: `
                        mutation{
                               deleteReservation(id:4,accommodation_id:5){
                                 result
                              }
                            }
                                  `
          }
        });
        expect(response2.data).toStrictEqual({
          data: {
            deleteReservation: {
              result: true
            }
          }
        });
      });
      
})
