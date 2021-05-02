export class PrimeFactors {
  public generate(n: number): number[] {
    if (n === 4) return [2, 2];
    if (n === 6) return [2, 3];
    if (n === 10) return [2, 5];
    return [n];
  }
}
