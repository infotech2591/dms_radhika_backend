'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dealerStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
      dealerStock.hasMany(models.dealerStock,
        {foreignKey:{  
        name:'id',     
        },     
        onDelete:'CASCADE',    
        onUpdate:'CASCADE'      
        })

        dealerStock.belongsTo(models.dealer,{as: 'dealer',
        foreignKey: {
        name: 'dealer_id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
        });

    }
  }
  dealerStock.init({
    dealer_id: DataTypes.INTEGER,
      dealer_code: DataTypes.STRING,
      motor: DataTypes.STRING,
      pump: DataTypes.STRING,
      motor_serial_no: DataTypes.STRING,
      pump_serial_no: DataTypes.STRING,
      set: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'dealerStock',
  });
  return dealerStock;
};