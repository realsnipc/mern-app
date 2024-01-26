const PORT = process.env.PORT || 7777;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const MONGO_URI= process.env.MONGO_URI;
const CLIENT_URL = process.env.CLIENT_URL || "localhost:7777/";

module.exports = { PORT, DB_USER, DB_PASS, CLIENT_URL,MONGO_URI };
