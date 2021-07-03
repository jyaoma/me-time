const { pgp, db } = require("Utils/database");

const { QueryFile } = pgp;

const getAllEvents = new QueryFile("./queries/events/sql/getAllEvents.sql");
const queryToGetAllEvents = () => db.any(getAllEvents);

module.exports = {
  queryToGetAllEvents,
};
