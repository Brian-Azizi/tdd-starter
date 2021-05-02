export class PrimeFactors {
  PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

  private generatePrimesUntil(n: number): number[] {
    let result = [];
    if (n >= 2) {
      result.push(2);
    }
    if (n >= 3) {
      result.push(3);
    }
    if (n >= 5) {
      result.push(5);
    }
    if (n >= 7) {
      result.push(7);
    }
    if (n >= 11) {
      result.push(11);
    }
    if (n >= 13) {
      result.push(13);
    }
    if (n >= 17) {
      result.push(17);
    }
    if (n >= 19) {
      result.push(19);
    }
    return result;
  }

  public generate(n: number): number[] {
    let result = [];
    for (let p of this.generatePrimesUntil(n)) {
      while (n % p === 0) {
        result.push(p);
        n = n / p;
      }
    }
    return result;
  }
}
