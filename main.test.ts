import { PrimeFactors } from "./main";

describe("PrimeFactors", function () {
  let generate: (n: number) => number[];
  beforeEach(() => {
    generate = new PrimeFactors().generate;
  });

  describe("generate", function () {
    it("should not throw an error when called", function () {
      expect(() => generate(2)).not.toThrow();
    });
    it.each([
      [2, [2]],
      [3, [3]],
      [4, [2, 2]],
      [5, [5]],
      [6, [2, 3]],
      [10, [2, 5]],
    ])(
      "should return the prime factor decomposition when the input is %n",
      (n, factors) => {
        expect(generate(n)).toStrictEqual(factors);
      }
    );
  });
});
