const mongoose = require("mongoose");
const { MONGO_URI, DB_USER, DB_PASS } = require("../constants.js");

const connectionString = ``;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connection to MongoDB successful.");
  })
  .catch((err) => {
    console.log("Connection to MongoDB failed!" + err);
  });
