const express = require("express");
const usereventController = require("../controllers/userEventController");

const router = express.Router();

// Маршрут для получения истории событий
router.get("/history", async (req, res) => {
  const { userId, page, pageSize } = req.query;

  try {
    const events = await usereventController.getEventHistory(
      userId,
      page,
      pageSize
    );
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
