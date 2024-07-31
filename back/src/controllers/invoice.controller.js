const InvoiceServices = require('../services/invoice.service')

const InvoiceControllers = {
   getInvoiceList: async (req, res) => {
      try {
         const { page = 1, limit = 5, orderBy = 'id', sortBy = 'desc', search } = req.query

         const data = await InvoiceServices.getInvoiceList({
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
}

module.exports = InvoiceControllers