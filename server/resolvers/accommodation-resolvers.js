require("dotenv").config();
const models = require("../models/index");
const { Op } = require("sequelize");
// const passport = require("passport");
const jwt = require("jsonwebtoken");
const resolvers = {
  Query: {
    accommodations: async (root, value, context, info) => {
      const accs = await models.accommodation.findAll();
      return accs;
    },
    accommodation: async (root, { id }, context, info) => {
      const acc = await models.accommodation.findOne({
        where: { id }
      });
      return acc;
    },
    findAccForNumberOfPerson: async (root, { count }, context, info) => {
        const accs = await models.accommodation.findAll({
        where: {
          min_person: {
            [Op.lte]: count
          },
          max_person: {
            [Op.gte]: count
          }
        }
      });
      return accs;
    }
  }
};

module.exports = resolvers;
