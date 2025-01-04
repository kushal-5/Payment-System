const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
connectToMongo();

app.listen(3001, () => {
  console.log("Backend listening at http://localhost:3001");
});
