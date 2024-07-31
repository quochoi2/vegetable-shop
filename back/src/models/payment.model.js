const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
const UserModel = require('./user.model')

const PaymentModel = sequelize.define('payments', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   description: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Không có ghi chú' },
   method: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Tiền mặt' },
   status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Chưa duyệt' },
   user_id: { type: DataTypes.STRING, allowNull: false },
})

PaymentModel.belongsTo(UserModel, { foreignKey: 'user_id' })

module.exports = PaymentModel
