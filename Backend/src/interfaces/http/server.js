// Starts server, listens on PORT
import http from "http";
import { createApp } from "./app.js";

export const startHttpServer = (port, logger) => {
  const app = createApp();
  const server = http.createServer(app);

  server.on("error", (err) => {
    logger.error("Server failed to start", err);
  });

  server.listen(port, () => {
    logger.info(`🚀 HTTP server listening on http://localhost:${port}`);
  });
  return server;
};
