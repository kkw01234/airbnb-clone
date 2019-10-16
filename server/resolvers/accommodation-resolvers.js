require('dotenv').config();
const models = require("../models/index");
// const passport = require("passport");
const jwt = require('jsonwebtoken');
const resolvers = {
    Query:{
        accommodations : async (root,value,context,info)=>{
            const accs = await models.accommodation.findAll();
            return accs;
        },
        accommodation : async (root,{id},context,info)=>{
            const acc = await models.accommodation.findOne({
                where : {id}
            });
            return acc;
        }
    }
};

module.exports = resolvers;
