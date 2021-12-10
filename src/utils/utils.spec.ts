import { contains } from "./utils";

test("utils contains", () => {
  expect(contains("I love you", "YOU")).toBe(true);
  expect(contains("I love you", "hate")).toBe(false);
});
