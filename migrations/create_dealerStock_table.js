'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dealerStocks', {
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
      motor: {
        type: Sequelize.STRING
      },
      pump: {
        type: Sequelize.STRING
      },
      motor_serial_no: {
        type: Sequelize.TEXT
      },
      pump_serial_no: {
        type: Sequelize.TEXT
      },
      set: {
        type: Sequelize.STRING
      },
      dealer_code: {
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
    await queryInterface.dropTable('dealerStocks');
  }
};