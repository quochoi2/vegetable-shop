const UserService = require('../services/auth.service')

module.exports = {
   register: async (req, res) => {
      try {
         const user = await UserService.register(req.body)
         res.status(201).json(user)
      } catch (error) {
         res.status(500).json({ message: error.message })
      }
   },
   login: async (req, res) => {
      const { email, password } = req.body
      try {
         const { data, token } = await UserService.login(email, password)
         res.status(200).json({ userId: data.id, role: data.role, token })
      } catch (error) {
         res.status(401).json({ message: error.message })
      }
   }
}
