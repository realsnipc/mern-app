const cors = require("cors");
const { CLIENT_URL } = require("../constants");

const corsMiddleware = cors({
  origin: "http://localhost:5173" && CLIENT_URL,
});
module.exports = { 
    default: corsMiddleware 
};
