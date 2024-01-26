const express = require("express");
const app = express();
const constants = require("./constants");

// Middleware Import
const { corsMiddleware } = require("./middlewares/cors.middleware");

// Connection
require("./db/connection");

// Middlewares
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded());
app.use(corsMiddleware());

app.listen(constants.port, () => {
  console.log("App listening on http://localhost:" + constants.port);
});
