const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../sequelizeConfig");

const UserEvent = sequelize.define("UserEvent", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  action: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Другие поля события
});

module.exports = UserEvent;
