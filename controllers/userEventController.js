const UserEvent = require("../models/userevent");

const usereventController = {
  createEvent: async (userId, action) => {
    try {
      const userEvent = await UserEvent.create({ userId, action });
      return userEvent;
    } catch (error) {
      console.error(error);
      throw new Error("Ошибка при создании события");
    }
  },

  getEventHistory: async (userId, page, pageSize) => {
    try {
      const events = await UserEvent.findAndCountAll({
        where: { userId },
        limit: pageSize,
        offset: (page - 1) * pageSize,
        order: [["createdAt", "DESC"]], // sorting on create date
      });
      return events;
    } catch (error) {
      console.error(error);
      throw new Error("Ошибка при получении истории событий");
    }
  },
};

module.exports = usereventController;
