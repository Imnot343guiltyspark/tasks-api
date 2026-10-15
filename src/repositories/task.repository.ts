import type { Task } from "../models/task.model.js";

const tasks: Task[] = [];

export function findAll(): Task[] {
  return tasks;
}
