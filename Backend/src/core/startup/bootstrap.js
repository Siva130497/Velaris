// Orchestrates DB connect, config checks, etc.
import { connectMongo } from "../../infrastructure/database/mongooseClient.js";
import { startHttpServer } from "../../interfaces/http/server.js";
import { getAppConfig } from "../config/appConfig.js";

export const bootstrap = async (logger) => {
  const config = getAppConfig();

  logger.info("🔧 Bootstrapping Velaris backend...");

  await connectMongo(logger);

  startHttpServer(config.port, logger);
};
