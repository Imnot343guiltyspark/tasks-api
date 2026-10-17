import type { Request, Response } from "express";
import * as taskService from "../services/task.service.js";

export function listTasks(_req: Request, res: Response): void {
  const tasks = taskService.listTasks();
  res.status(200).json(tasks);
}

export function createTask(req: Request, res: Response): void {
  const { title, description } = req.body;
  const task = taskService.createTask(title, description);
  res.status(201).json(task);
}
