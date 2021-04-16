'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    access_token:DataTypes.TEXT,
    refresh_token:DataTypes.TEXT
  },
  {
    hooks:{
       beforeCreate:async(user,_options)=>{
        try {
          const hash =  await bcrypt.hash(user.password, 10);
          user.password = hash;
        } catch (err) {
          throw new Error();
        }
      }
    },
    sequelize,
    tableName:'users',
    modelName: 'User',
  }
  );
  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

  return User;
};