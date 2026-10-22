import type { Task } from "../models/task.model.js";

const tasks: Task[] = [];

export function findAll(): Task[] {
  return tasks;
}

let nextTaskId = 1;

export function create(data: Omit<Task, "id">): Task {
  const task: Task = { id: nextTaskId, ...data };
  nextTaskId++;
  tasks.push(task);
  return task;
}
