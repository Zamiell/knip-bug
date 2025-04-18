import { expect, test } from "bun:test";
import { foo } from "./foo";

test("foo", () => {
  expect(foo()).toEqual("foo");
});
