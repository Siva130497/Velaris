// App-wide config (ports, flags, etc.)
import { getEnv } from "./env.js";

export const getAppConfig = () => {
    return {
        port: parseInt(getEnv("PORT", "5001"), 10),
        mongoUri: getEnv("MONGO_URI", "mongodb://127.0.0.1:27017/velaris"),
        jwtsecret: getEnv("JWT_SECRET", "change_me"),
        nodeEnv: getEnv("NODE_ENV", "development")
    }
}