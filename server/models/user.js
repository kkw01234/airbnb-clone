'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    user_id : {
      type: DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    username: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false
    },
    create_time: {
      type : DataTypes.DATE,
      allowNull : false
    },
    super_host: {
      type : DataTypes.BOOLEAN,
      allowNull : false
    }
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};