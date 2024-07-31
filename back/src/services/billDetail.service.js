const BillDetailModel = require('../models/billDetail.model')
const ProductModel = require('../models/product.model')

const BillDetailServices = {
   getBillDetailByBillId: async (id) => {
      try {
         const data = await BillDetailModel.findAll({
            where: { bill_id: id },
            include: [{
               model: ProductModel,
               attributes: ['name', 'image', 'price']
            }]
         })
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   createBillDetail: async (dataCreate) => {
      try {
         const data = await BillDetailModel.create(dataCreate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deleteBillDetail: async (id) => {
      try {
         const data = await BillDetailModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.destroy()
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = BillDetailServices