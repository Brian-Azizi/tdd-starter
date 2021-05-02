export class PrimeFactors {
  public generate(n: number): number[] {
    if (n > 2 && n % 2 === 0) {
      return [2, n / 2];
    }
    return [n];
  }
}
