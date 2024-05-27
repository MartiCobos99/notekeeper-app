import { describe, expect, test } from "vitest";
import { validateType } from "../validateType";
describe("When the function is called with a value of type array", () => {
  test("Then an boolean should be returned.", () => {
    const value = {
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/11/2024"
    };
    const result = validateType(value);
    expect(typeof result).toEqual("boolean");
    expect(result).toEqual(true);
  });
});
