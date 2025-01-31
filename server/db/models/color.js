'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
    }
  };
  Color.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // must be between 2 and 20 characters long
        checkLength(value) {
          if(value.length < 2 || value.length > 20){
            throw new Error("Name must be between 2 and 20 characters long")
          }
        },
        endsIn(value) {
          if(value.slice(-1) === 'y'){
            throw new Error("Color can not end with 'y'")
          }
        } 
      }
    }
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};