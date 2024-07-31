const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const UserModel = require('../models/user.model')

module.exports = {
   register: async (userData) => {
      try {
         const hashedPassword = await bcrypt.hash(userData.password, 10)
         const data = await UserModel.create({ ...userData, password: hashedPassword })
         return data
      } catch (error) {
         throw new Error(error.message)
      }
   },
   login: async (email, password) => {
      try {
         const data = await UserModel.findOne({ where: { email } })
         if (!data) throw new Error('Not found')

         const isPasswordValid = await bcrypt.compare(password, data.password)
         if (!isPasswordValid) throw new Error('Invalid password')

         if (data.role !== 'admin' && data.role !== 'user') {
            throw new Error('Invalid role')
         }

         const token = jwt.sign({ id: data.id }, 'hoidzprovodoi', { expiresIn: '10h' })
         return { data, token }
      } catch (error) {
         throw new Error(error.message)
      }
   }
}
