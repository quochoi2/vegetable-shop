const BillDetailModel = require('../models/billDetail.model')
const BillModel = require('../models/bill.model')
const UserModel = require('../models/user.model')
const ProductModel = require('../models/product.model')
const { sequelize } = require('../config/db')

const StatisticServices = {
   getAllStatistics: async () => {
      try {
         const totalOrder = await BillModel.findAll()
         const totalMoney = await BillDetailModel.sum('total')
         const totalUser = await UserModel.findAll({
            where: { role: 'user' }
         })
         return { totalMoney: totalMoney, totalOrder: totalOrder, totalUser: totalUser }
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getTopSellProduct: async (limit) => {
      try {
         const topSelling = await BillDetailModel.findAll({
            attributes: [
               'product_id',
               [sequelize.fn('SUM', sequelize.col('billDetails.quantity')), 'total_quantity'],
            ],
            group: ['product_id'],
            order: [[sequelize.literal('total_quantity'), 'DESC']],
            limit: limit,
            include: [{
               model: ProductModel,
               attributes: ['id', 'name', 'image', 'price']
            }]
         })
         return topSelling
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = StatisticServices