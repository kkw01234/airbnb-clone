const axios = require('axios');
const models = require('./models/index');
axios.default.header.common['Authorization'] = localStorage.getItem('jwt'); 
test('insert test',async ()=>{
    models.sequelize.sync().then(()=>{
        console.log("DB Start");
      }).catch(err=>{
        console.error(err);
      });
    const check = await axios({
        url:'http://localhost:3333/api',
        method : `post`,
        data:{
            query:`
            query{
                checkUserIdAndPassword(user_id:"1234",password:"12345678"){
                    token
                }
            }
            `
        }
    });
    expect(check).toBeTruthy();
    
});