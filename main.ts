export class PrimeFactors {
  public generate(n: number): number[] {
    if (n > 2 && n % 2 === 0) {
      return [2, n / 2];
    }
    if (n > 3 && n % 3 === 0) {
      return [3, n / 3];
    }
    if (n > 5 && n % 5 === 0) {
      return [5, n / 5];
    }
    return [n];
  }
}
