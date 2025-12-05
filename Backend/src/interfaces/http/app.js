// Creates Express app, plugs middlewares & routes
import express from "express";
import cors from "cors";
import router from "../routes/index.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
import { requestLogger } from "../middlewares/requestLogger.js";

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);

  app.get("/health", (req, res) => {
    res.json({
      status: "OK",
      uptime: process.uptime(),
      env: process.env.NODE_ENV || "development",
    });
  });

  app.use("/api", router);
  app.use(errorMiddleware);
  return app;
};
