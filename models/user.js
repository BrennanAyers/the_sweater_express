'use strict';
const hat = require('hat')
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      unique: true
    },
    password: DataTypes.STRING,
    api_key: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: user => {
        user.password = bcrypt.hashSync(user.password, 8)
        user.api_key = hat()
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
