import mongoose from "mongoose";
import { getAppConfig } from "../../core/config/appConfig.js";

export const connectMongo = async (logger) => {
  const { mongoUri } = getAppConfig();
  try {
    await mongoose.connect(mongoUri);
    logger.info("✅ MongoDB connected:", mongoUri);
  } catch (error) {
    logger.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
