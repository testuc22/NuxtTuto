const {Sequelize} = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const sequelize = new Sequelize(config.database,config.username,config.password,config);
try {
    sequelize.authenticate();
    console.log("Connection Established Successfully")
} catch (error) {
    console.log("There Was an error establishing the connection",error)
}
module.exports=sequelize