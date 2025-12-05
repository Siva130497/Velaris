// Application entrypoint
import { loadEnv } from "./core/config/env.js";
import { createLogger } from "./core/logging/logger.js";
import { bootstrap } from "./core/startup/bootstrap.js";

loadEnv();

const logger = createLogger();

bootstrap(logger)
  .then(() => {
    logger.info("✅ Velaris backend started successfully");
  })
  .catch((err) => {
    logger.error("❌ Failed to start Velaris backend", err);
    process.exit(1);
  });
