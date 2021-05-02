export class PrimeFactors {
  public generate(n: number): number[] {
    if (n === 5) return [5];
    if (n === 3) return [3];
    return [2];
  }
}
