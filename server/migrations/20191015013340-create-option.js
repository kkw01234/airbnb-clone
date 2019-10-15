'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('options', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accommodation_id: {
        type: Sequelize.INTEGER
      },
      whole_house: {
        type: Sequelize.BOOLEAN
      },
      private_room: {
        type: Sequelize.BOOLEAN
      },
      hotel_room: {
        type: Sequelize.BOOLEAN
      },
      multi_person_room: {
        type: Sequelize.BOOLEAN
      },
      room_count: {
        type: Sequelize.BOOLEAN
      },
      bed_count: {
        type: Sequelize.BOOLEAN
      },
      bathroom_count: {
        type: Sequelize.BOOLEAN
      },
      min_people: {
        type: Sequelize.INTEGER
      },
      max_people: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('options');
  }
};