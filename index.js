const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Подключаем контроллеры
const userController = require("./controllers/userController");
// const userEventController = require("./controllers/userEventController");
const usereventRouter = require("./routes/userEvent");
const { Sequelize } = require("./sequelizeConfig");

// Маршруты для пользователей
app.post("/users/createUser", userController.createUser);
app.put("/users/:id", userController.updateUser);
app.get("/users", userController.getUsers);

// Маршруты для истории действий с пользователями
app.use("/userevent", usereventRouter);
// app.get("/user-events/:user_id", userEventController.getUserEvents);

const sequelize = new Sequelize("usersdb", "postgres", "252623Er!", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Подключение к базе данных успешно установлено.");
  })
  .catch((err) => {
    console.error("Ошибка подключения к базе данных:", err);
  });

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
