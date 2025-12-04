export const requestLogger = (req, res, next) => {
  const start = Date.now();
  //Node.js EventEmitter pattern:
  //res.on("eventName", callback)
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `[REQ] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`
    );
  });
  next();
};
