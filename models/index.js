const sequelize = require("sequelize");
const studentsModel = require("./students");
const { Model } = require("sequelize");
const connection = new sequelize("students", "students", "$tudent$", {
  host: "localhost",
  dialect: "mysql",
});
const students = studentsModel(connection, sequelize);
module.exports = { students, Op: sequelize.Op };
