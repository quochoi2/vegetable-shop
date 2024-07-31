const { Op } = require('sequelize')
const UserModel = require('../models/user.model')

const UserServices = {
   getUserList: async ({ page, limit, orderBy, sortBy, search }) => new Promise(async (resolve, reject) => {
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

         const data = await UserModel.findAndCountAll({
            where: query,
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
   getUserById: async (id) => {
      try {
         const data = await UserModel.findByPk(id)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   updateUser: async (id, dataUpdate) => {
      try {
         const data = await UserModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.update(dataUpdate)
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   deleteUser: async (id) => {
      try {
         const data = await UserModel.findByPk(id)
         if (!data) {
            throw new Error('Not found')
         }
         await data.destroy()
         return { message: 'Deleted successfully' }
      } catch (error) {
         throw new Error(error.message)
      }
   }
}

module.exports = UserServices