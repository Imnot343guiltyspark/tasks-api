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
});
