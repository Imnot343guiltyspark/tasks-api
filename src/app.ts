import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default app;

app.use((req, res) => {
  res.status(404).json({
    error: {
      code: "NOT_FOUND",
      message: `Route ${req.method} ${req.originalUrl} not found`,
    },
  });
});
