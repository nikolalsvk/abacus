import { add, substract } from "./index";

test("add", () => {
  const result = add(1, 2);

  debugger;

  expect(result).toEqual(3);
});

test("substract", () => {
  expect(substract(1, 2)).toEqual(-1);
});
