const PaymentServices = require('../services/payment.service')

const PaymentControllers = {
   getAllPayments: async (req, res) => {
      try {
         const data = await PaymentServices.getAllPayments()
         res.status(200).json(data)
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
   getAllPaymentByUserId: async (req, res) => {
      try {
         const id = req.params.id
         const data = await PaymentServices.getAllPaymentByUserId(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message })
      }
   },
   createPayment: async (req, res) => {
      try {
         const dataCreate = req.body
         const data = await PaymentServices.createPayment(dataCreate)

         if (!data) {
            return res.json({ message: 'Not found any data' })
         }
         res.status(201).json({
            message: 'Created successfully',
            data: data,
         })
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
   updatePayment: async (req, res) => {
      try {
         const id = req.params.id
         const dataUpdate = req.body
         const data = await PaymentServices.updateCartItem(id, dataUpdate)
         res.status(200).json({
            message: 'Updated successfully',
            data: data,
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   deletePayment: async (req, res) => {
      try {
         const id = req.params.id
         await PaymentServices.deletePayment(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   }
}

module.exports = PaymentControllers