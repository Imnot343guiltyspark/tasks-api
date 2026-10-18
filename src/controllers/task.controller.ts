import type { Request, Response } from "express";
import * as taskService from "../services/task.service.js";

export function listTasks(_req: Request, res: Response): void {
  const tasks = taskService.listTasks();
  res.status(200).json(tasks);
}

export function createTask(req: Request, res: Response): void {
  const { title, description } = req.body ?? {};

  if (typeof title !== "string" || title.trim() === "") {
    res.status(400).json({
      error: { code: "VALIDATION_ERROR", message: "Title is required" },
    });
    return;
  }

  const task = taskService.createTask(title, description);
  res.status(201).json(task);
}
