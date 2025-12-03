// Reads env vars, central place
import dotenv from "dotenv";

export const loadEnv = () => {
  dotenv.config();
};

export const getEnv = (key, defaultValue = undefined) => {
  const value = process.env[key];
  if (
    defaultValue === undefined ||
    defaultValue === null ||
    defaultValue === ""
  ) {
    return defaultValue;
  }
  return value;
};
