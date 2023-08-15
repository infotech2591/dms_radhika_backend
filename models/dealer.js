'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dealer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      // define association here
      dealer.hasMany(models.dealer,
        {foreignKey:{  
        name:'id',     
        },     
        onDelete:'CASCADE',    
        onUpdate:'CASCADE'      
        })

    }
  }
  dealer.init({
    dealer_code: DataTypes.STRING,
    name:DataTypes.STRING,
    email: DataTypes.STRING,
    mob_no: DataTypes.STRING,
    address: DataTypes.TEXT,
    shop_address: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'dealer',
  });
  return dealer;
};