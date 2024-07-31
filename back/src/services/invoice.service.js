const { Op } = require('sequelize')
const ManufactureModel = require('../models/manufacture.model')
const InvoiceModel = require('../models/invoice.model')

const InvoiceServices = {
   getInvoiceList: async ({ page, limit, orderBy, sortBy, search }) => new Promise(async (resolve, reject) => {
      try {
         const query = {}
         if (search) {
            query.name = { [Op.substring]: search }
         }

         const queries = {
            offset: (page - 1) * limit,
            limit
         }

         if (orderBy) {
            queries.order = [[orderBy, sortBy]]
         }

         const data = await InvoiceModel.findAndCountAll({
            include: [{
               model: ManufactureModel,
               where: query,
               attributes: ['name', 'email']
            }],
            ...queries
         })

         const res = {
            totalItems: data?.count,
            totalPages: Math.ceil(data?.count / limit),
            currentPage: page,
            data: data?.rows
         }
         resolve(res)
      } catch (error) {
         reject(error)
      }
   }),
}

module.exports = InvoiceServices