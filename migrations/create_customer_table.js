'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dealer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
         references:{
          model:'dealers',
           key:'id',
           },
           onDelete:'CASCADE',
           onUpdate:'CASCADE'
      },
      customer_code: {
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
      dealer_code: {
        type: Sequelize.STRING
      },
      bill_attachment: {
        type: Sequelize.STRING
      },
      purchase_date: {
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
    await queryInterface.dropTable('customers');
  }
};