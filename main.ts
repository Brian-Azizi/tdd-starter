export class PrimeFactors {
  public generate(n: number): number[] {
    let result = [];
    for (let i = 2; i <= n; i++) {
      if (n >= i) {
        while (n % i === 0) {
          result.push(i);
          n = n / i;
        }
      }
    }

    return result;
  }
}
