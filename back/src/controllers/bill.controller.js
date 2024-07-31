const BillServices = require('../services/bill.service')

const BillControllers = {
   getAllBills: async (req, res) => {
      try {
         const data = await BillServices.getAllBills()
         res.status(200).json(data)
      } catch (error) {
         res.status(400).json({ message: error.message })
      }
   },
   getBillList: async (req, res) => {
      try {
         const { page = 1, limit = 5, orderBy = 'id', sortBy = 'desc', search } = req.query

         const data = await BillServices.getBillList({
            page: +page ? +page : 1,
            limit: +limit ? +limit : 10,
            orderBy,
            sortBy,
            search
         })
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ message: error.message })
      }
   },
   getAllBillByUserId: async (req, res) => {
      try {
         const id = req.params.id
         const data = await BillServices.getAllBillByUserId(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message })
      }
   },
   createBill: async (req, res) => {
      try {
         const dataCreate = req.body
         const data = await BillServices.createBill(dataCreate)

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
   updateBill: async (req, res) => {
      try {
         const id = req.params.id
         const data = await BillServices.updateBill(id)
         res.status(200).json({
            message: 'Updated successfully',
            data: data,
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   deleteBill: async (req, res) => {
      try {
         const id = req.params.id
         await BillServices.deleteBill(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   }
}

module.exports = BillControllers