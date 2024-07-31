const CartItemServices = require('../services/cartItem.service')

const CartItemControllers = {
   createCartItem: async (req, res) => {
      try {
         const dataCreate = req.body
         const data = await CartItemServices.createCartItem(dataCreate)

         if (!data) {
            return res.json({ message: 'Not found any data' })
         }
         res.status(201).json({
            message: 'Created successfully',
            data: data
         })
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
   getCartItemByCartId: async (req, res) => {
      try {
         const id = req.params.id
         const data = await CartItemServices.getCartItemByCartId(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message })
      }
   },
   updateCartItem: async (req, res) => {
      try {
         const id = req.params.id
         const dataUpdate = req.body
         const data = await CartItemServices.updateCartItem(id, dataUpdate)
         res.status(200).json({
            message: 'Updated successfully',
            data: data
         })
      } catch (error) {
         res.status(400).json({ error: error.message });
      }
   },
   deleteCartItem: async (req, res) => {
      try {
         const id = req.params.id
         await CartItemServices.deleteCartItem(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
}

module.exports = CartItemControllers