const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
const UserModel = require('./user.model')

const BillModel = sequelize.define('bills', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   method: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Tiền mặt' },
   status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Chưa duyệt' },
   description: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Không có ghi chú' },
   user_id: { type: DataTypes.STRING, allowNull: false },
})

BillModel.belongsTo(UserModel, { foreignKey: 'user_id' })

module.exports = BillModel
