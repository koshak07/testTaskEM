const User = require("../models/user");
const usereventController = require("./userEventController");

const userController = {
  //create new user
  createUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await User.create({ name, email });
      // update event
      await usereventController.createEvent(user.id, "create");
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка при создании пользователя" });
    }
  },

  // update user
  updateUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email } = req.body;
      const [updated] = await User.update(
        { name, email },
        { where: { id: userId } }
      );

      if (updated) {
        // update event
        await usereventController.createEvent(userId, "update");

        res.status(200).json({ message: "Пользователь обновлен" });
      } else {
        res.status(404).json({ error: "Пользователь не найден" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка при обновлении пользователя" });
    }
  },

  // get all users
  getUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка при получении пользователей" });
    }
  },
};

module.exports = userController;
