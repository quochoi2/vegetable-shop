// middlewares/checkRole.js

const UserModel = require('../models/user.model');

const checkRole = (role) => {
   return async (req, res, next) => {
      try {
         const userId = req.userId; // Assuming you have userId in req (e.g., from a JWT token)
         const user = await UserModel.findByPk(userId);

         if (!user) {
            return res.status(401).json({ message: 'User not found' });
         }

         if (user.role !== role) {
            return res.status(403).json({ message: 'Access denied' });
         }

         next();
      } catch (error) {
         res.status(500).json({ message: 'Internal server error' });
      }
   };
};

module.exports = checkRole;
