"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3002;
const logger = require("./middleware/logger");
const notFound = require("./handlers/404");
const errorHandler = require("./handlers/500");

//created a singleton which creates an instance of express.
const app = express();

//middleware => functions that interacts with the request / response objects
app.use(cors());

// use middleware on EVERYTHING
// app.use(logger);

// app.use();

app.get("/", logger, (req, res, next) => {
  res.status(200).send("Hello");
});

app.get("/bad", (req, res, next) => {
  next("we have an issue");
});

//if nothing catches, everything is sent to the star
app.use("/*", notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log("listening on port: ", PORT));
}

module.exports = { start, app };
