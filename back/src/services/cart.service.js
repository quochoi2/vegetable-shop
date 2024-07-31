const CartModel = require('../models/cart.model')

const CartServices = {
   createCart: async (userId) => {
      try {
         const data = await CartModel.findOne({ where: { user_id: userId } })
         if (!data) {
            data = await CartModel.create({ user_id: userId })
         }
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   // getProductById: async (id) => {
   //    try {
   //       const data = await ProductModel.findByPk(id)
   //       return data;
   //    } catch (error) {
   //       throw new Error(error.message)
   //    }
   // },
   deleteCart: async (id) => {
      try {
         await CartModel.destroy({ where: { id: id } })
         return { message: 'Deleted successfully' }
      } catch (error) {
         throw new Error(error.message)
      }
   },
}

module.exports = CartServices