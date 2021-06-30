//require
const Sequelize = require('sequelize');
require('dotenv').config();

//mysql hosting
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    username: "root",
    password: "root",
    port: 3306
  });
}

module.exports = sequelize;