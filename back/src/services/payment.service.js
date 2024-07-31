const PaymentModel = require('../models/payment.model')
const UserModel = require('../models/user.model')

const PaymentServices = {
   getAllPayments: async () => {
      try {
         const data = await PaymentModel.findAll({
            include: [{
               model: UserModel,
               attributes: ['name', 'phone', 'address']
            }]
         })
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   getAllPaymentByUserId: async (id) => {
      try {
         const data = await PaymentModel.findAll({
            where: { user_id: id },
            include: [{
               model: UserModel,
               attributes: ['name', 'phone', 'address']
            }]
         })
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   createPayment: async (dataCreate) => {
      try {
         const data = await PaymentModel.create(dataCreate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   updateCartItem: async (id, dataUpdate) => {
      try {
         const data = await PaymentModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         return await data.update(dataUpdate)
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deletePayment: async (id) => {
      try {
         const data = await PaymentModel.findByPk(id)
         if (!data) {
            throw new Error(error.message)
         }
         await data.destroy()
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = PaymentServices