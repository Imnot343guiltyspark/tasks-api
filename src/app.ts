import express from "express";
import healthRoutes from "./routes/health.routes.js";

const app = express();

app.use(healthRoutes);

app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: `Route ${req.method} ${req.originalUrl} not found`,
    },
  });
});

export default app;
