export class PrimeFactors {
  PRIME_NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];

  public generate(n: number): number[] {
    let result = [];
    for (let p of this.PRIME_NUMBERS) {
      while (n % p === 0) {
        result.push(p);
        n = n / p;
      }
    }
    return result;
  }
}
