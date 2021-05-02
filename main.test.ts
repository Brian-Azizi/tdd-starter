import { PrimeFactors } from "./main";

describe("PrimeFactors", function () {
  let primeFactors: PrimeFactors;
  beforeEach(() => {
    primeFactors = new PrimeFactors();
  });

  describe("generate", function () {
    it("should not throw an error when called", function () {
      expect(() => primeFactors.generate()).not.toThrow();
    });
  });
});
