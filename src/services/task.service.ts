import * as taskRepository from "../repositories/task.repository.js";
import type { Task } from "../models/task.model.js";

export function listTasks(): Task[] {
  return taskRepository.findAll();
}

export function createTask(title: string, description?: string): Task {
  return taskRepository.create({
    title,
    description,
    completed: false,
    createdAt: new Date(),
  });
}

export function getTaskById(id: number): Task | undefined {
  return taskRepository.findById(id);
}
