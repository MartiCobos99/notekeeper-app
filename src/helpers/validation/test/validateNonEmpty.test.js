import { describe, expect, test } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty.js";
describe("When the function is called with a value of type array", () => {
  test("Then an boolean should be returned.", () => {
    const value = {
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/11/2024",
      created_at: 1715420815988,
    };
    const result = validateNonEmpty(value);
    expect(typeof result).toEqual("boolean");
    expect(result).toEqual(true);
  });
});
