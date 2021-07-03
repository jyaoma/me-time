const { queryToGetAllEvents } = require("Queries/events");

const getAllEvents = async (req, res, next) => {
  try {
    const events = await queryToGetAllEvents();

    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEvents,
};
