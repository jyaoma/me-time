const express = require("express");
const router = express.Router({ mergeParams: true });

const { getAllEvents } = require("Controllers/events");

router.get("/", getAllEvents);

module.exports = router;
