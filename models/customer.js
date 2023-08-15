'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
      customer.hasMany(models.customer,
        {foreignKey:{  
        name:'id',     
        },     
        onDelete:'CASCADE',    
        onUpdate:'CASCADE'      
        })

        customer.belongsTo(models.dealer,{as: 'dealer',
        foreignKey: {
        name: 'dealer_id',
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
        });

    }
  }
  customer.init({
    dealer_id: DataTypes.INTEGER,
    customer_code: DataTypes.STRING,
    name:DataTypes.STRING,
    mob_no: DataTypes.STRING,
    address: DataTypes.TEXT,
    dealer_code: DataTypes.STRING,
    bill_attachment: DataTypes.STRING,
    purchase_date: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};