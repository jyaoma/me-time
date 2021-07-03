const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/events", require("./events"));

module.exports = router;
