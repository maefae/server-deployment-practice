"use strict";

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const PORT = process.env.PORT || 3002;

// //created a singleton which creates an instance of express.
// const app = express();

// //middleware => functions that interacts with the request / response objects
// app.use(cors());

// // use mthod makes middleware availble to all routes. Whereas get method has middleware availble only to get routes.
// // app.use();
// //next is used for error handling. sends it to the next function in the stack.
// app.get("/", (req, res, next) => {
//   res.status(200).send("Hello");
// });

// app.listen(PORT, () => console.log("listening on port: ", PORT));

//one way to do this
// const server = require("./server.js");

// server.start();

//another way to do this
const { start } = require("./server");

start();
