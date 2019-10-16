require('dotenv').config();
const models = require("../models/index");
// const passport = require("passport");
const jwt = require('jsonwebtoken');
const resolvers = {
  Query: {
    users: async (root, value, context, info) => {
      const users = await models.user.findAll();
      return users;
    },
    getUser: async (root, { user_id }, context, info) => {
      const user = await models.user.findOne({
        where: { user_id: user_id }
      });
      return users;
    },
    checkUserIdAndPassword: async (
      root,
      { user_id, password },
      context,
      info
    ) => {
      
      const user = await models.user.findOne({
        where: { user_id, password }
      });
      const token = jwt.sign(user.dataValues,process.env.APP_SECRET,{
        expiresIn : 1000 * 60 * 30,
        
      });

      console.log(token);

      return {token};
    }
  },
  Mutation: {
    createUser: async (
      root,
      { user_id, username, email, password, super_host },
      context,
      info
    ) => {
      const user = await models.user.create({
        user_id,
        username,
        email,
        password,
        super_host,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return user;
    },
    deleteUser: async (root, { user_id }, context, info) => {
      const user = await models.user.destroy({
        where: { user_id }
      });
      return user;
    }
  }
};

module.exports = resolvers;
