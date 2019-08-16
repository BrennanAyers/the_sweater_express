'use strict';
const hat = require('hat')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    password: DataTypes.STRING,
    api_key: DataTypes.STRING
  }, {
    hooks: {
      afterCreate: user => {
        user.api_key = hat();
    }}
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
