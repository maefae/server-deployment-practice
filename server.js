"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3002;

//created a singleton which creates an instance of express.
const app = express();

//middleware => functions that interacts with the request / response objects
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("Hello");
});

function start() {
  app.listen(PORT, () => console.log("listening on port: ", PORT));
}

module.exports = { start, app };
