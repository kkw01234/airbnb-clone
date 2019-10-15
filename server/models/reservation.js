'use strict';
module.exports = (sequelize, DataTypes) => {
  const reservation = sequelize.define('reservation', {
    start_date: {
      type :DataTypes.DATE,
      allowNull : false
    },
    end_date: {
      type : DataTypes.DATE,
      allowNull : false
    },
    person_count: {
      type :DataTypes.INTEGER,
      allowNull : false
    },
    user_id: {
      type : DataTypes.STRING,
      allowNull : false
    },
    accommodation_id: {
      type :  DataTypes.INTEGER,
      allowNull :false
    }
  }, {});
  reservation.associate = function(models) {
    // associations can be defined here
  };
  return reservation;
};