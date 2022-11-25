import { dbUrl } from "../config";
import logger from "../logger";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(dbUrl);

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connection to DB has been established successfully.");
  })
  .catch((err) => {
    logger.error(`Unable to connect to the database: ${err}`);
  });

export const db = sequelize;
