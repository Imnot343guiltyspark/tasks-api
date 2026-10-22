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

export function getTaskById(req: Request, res: Response): void {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    res.status(400).json({
      error: { code: "VALIDATION_ERROR", message: "Id must be a number" },
    });
    return;
  }

  const task = taskService.getTaskById(id);

  if (task === undefined) {
    res.status(404).json({
      error: { code: "NOT_FOUND", message: `Task ${id} not found` },
    });
    return;
  }

  res.status(200).json(task);
}
