const UserServices = require('../services/user.service')

const UserControllers = {
   getUserList: async (req, res) => {
      try {
         const { page = 1, limit = 5, orderBy = 'id', sortBy = 'desc', search } = req.query

         const data = await UserServices.getUserList({
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
   getUserById: async (req, res) => {
      try {
         const id = req.params.id
         const data = await UserServices.getUserById(id)
         if (!data) {
            return res.status(404).json({ message: 'Not found any Id like this' })
         }
         res.status(200).json(data)
      } catch (error) {
         res.status(500).json({ error: error.message })
      }
   },
   updateUser: async (req, res) => {
      try {
         const id = req.params.id
         const dataUpdate = req.body
         const data = await UserServices.updateUser(id, dataUpdate)
         res.status(200).json({
            message: 'Updated successfully',
            data: data
         })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
   deleteUser: async (req, res) => {
      try {
         const id = req.params.id
         await UserServices.deleteUser(id)
         res.status(200).json({ message: 'Deleted successfully' })
      } catch (error) {
         res.status(400).json({ error: error.message })
      }
   },
}

module.exports = UserControllers