describe("toBe and not.toBe", () => {
  // toBe ===
  test("3 is 3", () => {
    expect(3).toBe(3);
  });

  test("booleans", () => {
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(true).not.toBe(false);
    expect(false).not.toBe(true);
  });
});

describe("reference Data types", () => {
  test("{} !== {}", () => {
    expect({}).not.toBe({});
  });
  test("{} !== {}", () => {
    let temp = {};
    expect(temp).toBe(temp);
  });
  test("[] !== []", () => {
    expect([]).not.toBe([]);
  });
});

// toEqual check values upto the deepest root level -> also known as deep equality
describe("Check toEqual", () => {
  test("[] is equal to []", () => {
    expect([]).toEqual([]);
  });
  test("[1,2,3] is not equal to []", () => {
    expect([1, 2, 3]).not.toEqual([]);
  });
  test("[1,2,3] is equal to [1,2,3]", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
  test("[1,2,[3,4]] is equal to [1,2,[3,4]]", () => {
    expect([1, 2, [3, 4]]).toEqual([1, 2, [3, 4]]);
  });
  //   test.only will run only this test case and it will ignore all others

  test("Nested Arrays", () => {
    //   test.only("Nested Arrays", () => {
    //   test.skip("Nested Arrays", () => {
    let a = [1, 2, 3];
    let b = [a, a];
    let c = [[1, 2, 3], a];
    expect(b).toEqual(c);
  });
});

describe("Relational Operator", () => {
  test("100+100<=200", () => {
    expect(100 + 100).toBeLessThanOrEqual(200);
  });
  test("100+100<201", () => {
    expect(100 + 100).toBeLessThan(201);
  });
  test("101+101>=201", () => {
    expect(101 + 101).toBeGreaterThanOrEqual(201);
  });
});
