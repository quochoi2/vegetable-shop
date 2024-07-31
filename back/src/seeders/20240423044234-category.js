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
      { name: 'Rau sạch', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Trái cây', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nước ngọt', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hạt khô', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đồ uống', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kem sữa', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nước ép', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đồ ăn', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chiên rán', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Đồ hộp', createdAt: new Date(), updatedAt: new Date() },
    ]

    await queryInterface.bulkInsert('categories', data, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('categories', null, {})
  }
}
