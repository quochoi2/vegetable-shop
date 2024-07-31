const BillDetailServices = require('../services/billDetail.service')

const billDetailControllers = {
   getBillDetailByBillId: async (req, res) => {
      try {
         const id = req.params.id
         const data = await BillDetailServices.getBillDetailByBillId(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message })
      }
   },
   createBillDetail: async (req, res) => {
      try {
         const dataCreate = req.body
         const data = await BillDetailServices.createBillDetail(dataCreate)

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
   deleteBillDetail: async (req, res) => {
      try {
         const id = req.params.id
         await BillDetailServices.deleteBillDetail(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   }
}

module.exports = billDetailControllers