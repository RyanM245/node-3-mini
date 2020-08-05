require("dotenv").config();
const express = require("express");
const massive = require("massive");

const app = express();

const { CONNECTION_STRING, SERVER_PORT } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
}).then((dbInstance) => app.set("db", dbInstance));

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
