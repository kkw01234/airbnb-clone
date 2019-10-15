'use strict';
module.exports = (sequelize, DataTypes) => {
  const accommodation = sequelize.define('accommodation', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    price: DataTypes.BIGINT,
    rating: DataTypes.INTEGER,
    host_id: DataTypes.STRING
  }, {});
  accommodation.associate = function(models) {
    // associations can be defined here
  };
  return accommodation;
};