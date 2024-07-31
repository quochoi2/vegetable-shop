const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')
const ProductModel = require('./product.model')
const CartModel = require('./cart.model')

const CartItemModel = sequelize.define('cartItems', {
   id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
   quantity: { type: DataTypes.INTEGER, allowNull: true },
   price: { type: DataTypes.INTEGER, allowNull: true },
   total: { type: DataTypes.INTEGER, allowNull: true },
   cart_id: { type: DataTypes.INTEGER, allowNull: false },
   product_id: { type: DataTypes.INTEGER, allowNull: false },
}, {
   getterMethods: {
      total() {
         if (this.price !== null && this.quantity !== null) {
            return this.price * this.quantity
         } else {
            return null
         }
      }
   },
   freezeTableName: true,
})

CartItemModel.belongsTo(CartModel, { foreignKey: 'cart_id' })
CartItemModel.belongsTo(ProductModel, { foreignKey: 'product_id' })

module.exports = CartItemModel 
