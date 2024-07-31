'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    // const data = [
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    //   { 
    //     name: 'Zooto',
    //     image: '',
    //     quantity: 2000, 
    //     price: 5000, 
    //     category_id: 2,
    //     manufacture_id: 2,
    //     createdAt: new Date(), 
    //     updatedAt: new Date(),
    //   },
    // ]

    // await queryInterface.bulkInsert('products', data, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // await queryInterface.bulkDelete('products', null, {})
  }
}
