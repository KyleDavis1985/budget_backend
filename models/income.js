'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Income.init(
    {
      userId: DataTypes.INTEGER,
      income: DataTypes.INTEGER,
      leftover: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Income',
      tableName: 'income'
    }
  )
  return Income
}
