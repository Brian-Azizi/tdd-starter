import { PrimeFactors } from "./main";

describe("PrimeFactors", function () {
  let primeFactors: PrimeFactors;
  beforeEach(() => {
    primeFactors = new PrimeFactors();
  });

  describe("generate", function () {
    it("should not throw an error when called", function () {
      expect(() => primeFactors.generate(2)).not.toThrow();
    });
    it.each([
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
      expect(primeFactors.generate(n)).toStrictEqual(factors);
    });
  });

  describe.only("generatePrimesUntil", () => {
    it.each([
      [1, []],
      [2, [2]],
      [3, [2, 3]],
      [4, [2, 3]],
      [5, [2, 3, 5]],
      [6, [2, 3, 5]],
      [7, [2, 3, 5, 7]],
      [8, [2, 3, 5, 7]],
      [9, [2, 3, 5, 7]],
      [10, [2, 3, 5, 7]],
      [11, [2, 3, 5, 7, 11]],
      [20, [2, 3, 5, 7, 11, 13, 17, 19]],
      // [14, [2, 7]],
      // [15, [3, 5]],
      // [25, [5, 5]],
      // [106, [2, 53]],
    ])("should return the list of primes until %s", (n, factors) => {
      expect(primeFactors["generatePrimesUntil"](n)).toStrictEqual(factors);
    });
  });
});
