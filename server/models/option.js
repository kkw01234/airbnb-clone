'use strict';
module.exports = (sequelize, DataTypes) => {
  const option = sequelize.define('option', {
    accommodation_id: DataTypes.INTEGER,
    whole_house: DataTypes.BOOLEAN,
    private_room: DataTypes.BOOLEAN,
    hotel_room: DataTypes.BOOLEAN,
    multi_person_room: DataTypes.BOOLEAN,
    room_count: DataTypes.BOOLEAN,
    bed_count: DataTypes.BOOLEAN,
    bathroom_count: DataTypes.BOOLEAN,
    min_people: DataTypes.INTEGER,
    max_people: DataTypes.INTEGER
  }, {});
  option.associate = function(models) {
    // associations can be defined here
  };
  return option;
};