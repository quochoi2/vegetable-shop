const CartItemModel = require('../models/cartItem.model')
const ProductModel = require('../models/product.model')

const CartItemServices = {
   getCartItemByCartId: async (id) => {
      try {
         const data = await CartItemModel.findAll({
            where: { cart_id: id },
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
   createCartItem: async (dataCreate) => {
      try {
         const data = await CartItemModel.create(dataCreate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   updateCartItem: async (id, dataUpdate) => {
      try {
         const data = await CartItemModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.update(dataUpdate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deleteCartItem: async (id) => {
      try {
         const data = await CartItemModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.destroy()
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = CartItemServices