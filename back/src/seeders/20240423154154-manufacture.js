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

    const data = [
      { name: 'Zooto', email: 'entaimen@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phương Nam', email: 'namphuong3@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hariken', email: 'uongdenchet@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Phantom', email: 'slience@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vandal', email: 'onetap@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Spectre', email: 'darksoul@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sherit', email: 'oneshotonekill@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Yến Mạch', email: 'yenmachenter@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Optimus', email: 'optimusprime@email.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Catch Tom', email: 'catchom@email.com', createdAt: new Date(), updatedAt: new Date() },
    ]

    await queryInterface.bulkInsert('manufactures', data, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('manufactures', null, {})
  }
}
