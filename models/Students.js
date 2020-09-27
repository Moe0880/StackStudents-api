const Students = (connection, Sequelize, Departments) =>
  connection.define(
    "animals",
    {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING, allowNull: false },
      gender: { type: Sequelize.STRING, allowNull: false },
      location: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    { paranoid: true }
  );

module.exports = Animals;