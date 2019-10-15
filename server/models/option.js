'use strict';
module.exports = (sequelize, DataTypes) => {
  const option = sequelize.define('option', {
    accommodation_id: {
      type : DataTypes.INTEGER,
      unique : true
    },
    whole_house: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    private_room: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    hotel_room: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    multi_person_room: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    room_count: {
      type :DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    bed_count:{
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    bathroom_count: {
      type : DataTypes.BOOLEAN,
      allowNull : false,
      defaultValue : 0
    },
    min_people: {
      type:DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 1
    },
    max_people: {
      type :DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 1
    }
  }, {});
  option.associate = function(models) {
    // associations can be defined here
  };
  return option;
};