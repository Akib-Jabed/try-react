import express from "express";
import config from "./config";
import routes from "./routes";
import dbConnection from "./utils/db-connection";

const app = express();

app.use(routes);

const port = config.port;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  dbConnection();
});
