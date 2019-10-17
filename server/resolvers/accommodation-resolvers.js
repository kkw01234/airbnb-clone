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
    },
    findAccForPrice: async (root, { min_price, max_price }, context, info) => {
      const accs = await models.accommodation.findAll({
        where: {
          price: {
            [Op.gte]: min_price,
            [Op.lte]: max_price
    }
  }
      });
      return accs;
    },
    findAccFilter: async (
      root,
      {
        check_in,
        check_out,
        person,
        whole_house = false,
        private_room = false,
        hotel_room = false,
        multi_person_room = false,
        room_count,
        bed_count,
        bathroom_count
      },
      context,
      info
    ) => {
      // console.log(value);
      // console.log();
      if (!check_in) check_in = new Date();
      if (!check_out) check_out = new Date().setDate(new Date().getDate() + 1);
      const where = {
        "$reservations.id$": null
      };
      if (person) {
        (where.min_person = {
          [Op.lte]: person
        }),
          (where.max_person = {
            [Op.gte]: person
          });
      }
      if (whole_house) {
        where.whole_house = true;
      }
      if (private_room) {
        where.private_room = true;
      }
      if (hotel_room) {
        where.hotel_room = true;
      }
      if (multi_person_room) where.multi_person_room = true;
      if (room_count) where.room_count = room_count;
      if (bed_count) where.bed_count = bed_count;
      if (bathroom_count) where.bathroom_count = bathroom_count;

      const accs = await models.accommodation.findAll({
        where,
        include: [
          {
            model: models.reservation,
            required: false,
            where: {
              [Op.and]: [
                {
                  [Op.or]: [
                    {
                      start_date: {
                        [Op.gt]: new Date(check_in)
                      }
                    },
                    {
                      end_date: {
                        [Op.lt]: new Date(check_in)
                      }
                    }
                  ]
                },
                {
                  [Op.or]: [
                    {
                      start_date: {
                        [Op.gt]: new Date(check_out)
                      }
                    },
                    {
                      end_date: {
                        [Op.lt]: new Date(check_out)
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      });
      // console.log(accs);
      return accs;
    }
  },
};

module.exports = resolvers;
