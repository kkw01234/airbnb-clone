"use strict";
const csv = require("csv-parser");
const fs = require("fs");
const results = [];
fs.createReadStream;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const result = await new Promise((res, rej) => {
      fs.createReadStream("data/data.csv")
        .pipe(csv())
        .on("data", data => {
          data.createdAt = new Date();
          data.updatedAt = new Date();
          results.push(data)
        })
        .on("end", () => {
          res(results);
        });
        
    });
    return queryInterface.bulkInsert("accommodation", results);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('users', null, {});
  }
};
