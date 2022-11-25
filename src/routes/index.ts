import { Request, Response } from "express";
import logger from "../logger";
import { response } from "../helpers";
import contactsRoutes from "./contactsRoutes";

const express = require("express");

const router = express.Router();
router.use("/contacts", contactsRoutes);

export const notFoundHandler = (req: Request, res: Response) => {
  logger.info(`${req.url} Route not found`);
  res.status(404).json(response(false, `Route Not Found`));
};

export const healthCheckHandler = (req: Request, res: Response) => {
  logger.info(`Health check for service`);
  res.status(200).json(response(true, `Service Running`));
};

export default router;
