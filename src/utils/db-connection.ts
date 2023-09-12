import mongoose from "mongoose";
import config from "../config";
import log from "./logger";

export default async function dbConnection() {
  const uri = config.dbUri;

  try {
    await mongoose.connect(uri);
    log.info("Connected to DB!!");
  } catch (e) {
    process.exit(1);
  }
}
