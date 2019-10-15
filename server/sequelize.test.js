const models = require('./models/index');
require('mysql2/node_modules/iconv-lite').encodingExists('foo');
test('insert test',async ()=>{
    const connection = await models.sequelize.sync();
    const result = await models.user.create({
        user_id : "test",
        username : "test",
        email : "gggg",
        password : "tttt",
        create_time : new Date(),
        super_host : 0
    });
    expect(result).toBe(1);
    // console.log(t);
    
});