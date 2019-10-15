'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    person_count: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    accommodation_id: DataTypes.INTEGER
  }, {});
  reservation.associate = function(models) {
    // associations can be defined here
  };
  return reservation;
};