require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
