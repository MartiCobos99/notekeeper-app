import { describe, expect, test } from "vitest";
import { validateEnum } from "../validateEnum.js";
describe("When the function is called with a value of type string", () => {
  test("Then an boolean should be returned.", () => {
    const value = "pending";
    const result = validateEnum(value);
    expect(typeof result).toEqual("boolean");
    expect(result).toEqual(true);
  });
});
