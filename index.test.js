const sum = require("./index");

describe("testing the sum function", () => {
  test("add two positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("add two negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
  test("add two decimal numbers", () => {
    expect(sum(1.5, 2.2)).toBe(3.7);
  });
  test("add two numbers as string but the outpust should be number", () => {
    expect(sum("1", "2")).toBe(3);
  });
  test("call the sum functions without any argument", () => {
    expect(sum()).toBe("No arguments Provided");
  });
  test("call the sum functions with only one argument", () => {
    expect(sum(1)).toBe("Need one more argument");
  });
  test("call the sum functions with more than two argument", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});

// first write the test cases
// then write the actual code

// there are many other matchers like toBe --> https://jestjs.io/docs/expect
// toBe works on ===
