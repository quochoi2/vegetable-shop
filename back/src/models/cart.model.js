const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
const UserModel = require('./user.model')

const CartModel = sequelize.define('carts', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   user_id: { type: DataTypes.INTEGER, allowNull: false },
})
CartModel.belongsTo(UserModel, { foreignKey: 'user_id' })

module.exports = CartModel 
