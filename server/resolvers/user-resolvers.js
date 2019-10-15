 const models = require('../models/index');
  const resolvers = {
    Query: {
      users: async (root,value,context,info)=>{
        const users = await models.user.findAll();
        return users;
      },
    }
  };

  module.exports =  resolvers;
