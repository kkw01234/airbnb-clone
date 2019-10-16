'use strict';
module.exports = (sequelize, DataTypes) => {
  const accommodation = sequelize.define('accommodation', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    price: DataTypes.BIGINT,
    rating: DataTypes.INTEGER,
    host_id: DataTypes.STRING,
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
    min_person: {
      type:DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 1
    },
    max_person: {
      type :DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 1
    }
  }, {});
  accommodation.associate = function(models) {
    // associations can be defined here
  };
  return accommodation;
};