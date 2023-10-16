const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize("usersdb", "postgres", "252623Er!", {
//   dialect: "postgres",
//   host: "localhost",
// });
const sequelize = new Sequelize(
  "postgres://postgres:252623Er!@localhost:5432/usersdb"
);

module.exports = sequelize;
