 const models = require('../models/index');
  const resolvers = {
    Query: {
      users: async (root,value,context,info)=>{
        const users = await models.user.findAll();
        return users;
      },
      getUser: async (root, {user_id},context,info)=>{
        const user = await models.user.findOne({
          where: {user_id : user_id}
        });
        return users;
      },
    }
  };

  module.exports =  resolvers;