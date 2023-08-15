'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dealers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dealer_code: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      mob_no: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      shop_address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dealers');
  }
};