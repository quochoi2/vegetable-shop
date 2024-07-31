const CartServices = require('../services/cart.service')

const CartControllers = {
   createCart: async (req, res) => {
      try {
         const userId = req.body.user_id
         if (!userId) {
            return res.status(400).json({ success: false, message: 'Missing userId' });
         }

         const data = await CartServices.createCart(userId)
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
   deleteCart: async (req, res) => {
      try {
         const id = req.params.id
         await CartServices.deleteCart(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
}

module.exports = CartControllers