const { Op } = require('sequelize')
const BillModel = require('../models/bill.model')
const UserModel = require('../models/user.model')

const BillServices = {
   getAllBills: async () => {
      try {
         const data = await BillModel.findAll({
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
   getBillList: async ({ page, limit, orderBy, sortBy, search }) => new Promise(async (resolve, reject) => {
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

         const data = await BillModel.findAndCountAll({
            include: [{
               model: UserModel,
               where: query,
               attributes: ['name', 'phone', 'address']
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
   getAllBillByUserId: async (id) => {
      try {
         const data = await BillModel.findAll({
            where: { user_id: id },
            include: [{
               model: UserModel,
               attributes: ['name', 'phone', 'address']
            }, {
               model: UserModel,
               attributes: ['name']
            }]
         })
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   createBill: async (dataCreate) => {
      try {
         const data = await BillModel.create(dataCreate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   updateBill: async (id, dataUpdate) => {
      try {
         const data = await BillModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         data.status = 'Đã duyệt'
         await data.save()
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deleteBill: async (id) => {
      try {
         const data = await BillModel.findByPk(id)
         if (!data) {
            throw new Error(error.message)
         }
         await data.destroy()
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = BillServices