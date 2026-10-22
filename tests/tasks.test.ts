import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "../src/app.js";

describe("POST /tasks", () => {
  it("creates a task and returns 201", async () => {
    const response = await request(app).post("/tasks").send({ title: "Pan" });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Pan");
    expect(response.body.completed).toBe(false);
  });

  it("returns 400 when title is missing", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({ description: "Task without title" });

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });

  it("returns 400 when body is missing", async () => {
    const response = await request(app).post("/tasks");

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });
});

describe("GET /tasks", () => {
  it("returns 200 and a list of tasks", async () => {
    const response = await request(app).get("/tasks");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /tasks/:id", () => {
  it("returns 400 when the id is not a number", async () => {
    const response = await request(app).get("/tasks/abc");

    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });

  it("returns 404 when the task does not exist", async () => {
    const response = await request(app).get("/tasks/999");

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("NOT_FOUND");
  });

  it("returns 200 and the task when it exists", async () => {
    const created = await request(app).post("/tasks").send({ title: "Coffee" });
    const id = created.body.id;

    const response = await request(app).get(`/tasks/${id}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.title).toBe("Coffee");
  });
});
