'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('customers', 'motor', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('customers', 'motor_serial', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('customers', 'pump', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('customers', 'pump_serial', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('customers', 'motor');
    await queryInterface.removeColumn('customers', 'motor_serial');
    await queryInterface.removeColumn('customers', 'pump');
    await queryInterface.removeColumn('customers', 'pump_serial');
  }
};
