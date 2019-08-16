const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
  checkHookDefined
} = require('sequelize-test-helpers')
const UserModel = require('../../../models/user')

describe('User Model', function() {
  const Model = UserModel(sequelize, dataTypes)
  const subject = new Model()

  checkModelName(Model)('User')

  it('properties', function() {
    ['email', 'password', 'api_key'].forEach(checkPropertyExists(subject));
  });

  it('hooks', function() {
    ['afterCreate'].forEach(checkHookDefined(subject))
  });
});
