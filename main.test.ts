import { generatePrimeFactors } from "./main";

describe("generatePrimeFactors", function () {
  it("should not throw an error when called", function () {
    expect(() => generatePrimeFactors(2)).not.toThrow();
  });
  it.each([
    [1, []],
    [2, [2]],
    [3, [3]],
    [4, [2, 2]],
    [5, [5]],
    [6, [2, 3]],
    [7, [7]],
    [8, [2, 2, 2]],
    [9, [3, 3]],
    [10, [2, 5]],
    [11, [11]],
    [14, [2, 7]],
    [15, [3, 5]],
    [25, [5, 5]],
    [106, [2, 53]],
  ])("should return the decomposition for %s", (n, factors) => {
    expect(generatePrimeFactors(n)).toStrictEqual(factors);
  });
});
