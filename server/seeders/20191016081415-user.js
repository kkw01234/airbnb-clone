"use strict";
const csv = require("csv-parser");
const fs = require("fs");
const stripBom = require('strip-bom-stream');
const results = [];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const result = await new Promise((res, rej) => {
      fs.createReadStream("data/user.csv")
        .pipe(stripBom())
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
    console.log(results);
    return queryInterface.bulkInsert("users", results);

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
