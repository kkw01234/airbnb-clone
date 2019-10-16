'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('accommodation', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      rating: {
        type: Sequelize.INTEGER
      },
      host_id: {
        type: Sequelize.STRING
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
      min_person: {
        type: Sequelize.INTEGER
      },
      max_person: {
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
    return queryInterface.dropTable('accommodation');
  }
};