export class PrimeFactors {
  PRIME_NUMBERS = [2, 3, 5, 7, 11];

  public generate(n: number): number[] {
    let result = [];
    while (n > 1) {
      for (let p of this.PRIME_NUMBERS) {
        while (n % p === 0) {
          result.push(p);
          n = n / p;
        }
      }
    }
    return result;
  }
}
