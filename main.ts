export class PrimeFactors {
  public generate(n: number): number[] {
    let result = [];
    while (n >= 2 && n % 2 === 0) {
      result.push(2);
      n = n / 2;
    }
    while (n >= 3 && n % 3 === 0) {
      result.push(3);
      n = n / 3;
    }
    while (n >= 5 && n % 5 === 0) {
      result.push(5);
      n = n / 5;
    }
    while (n >= 7 && n % 7 === 0) {
      result.push(7);
      n = n / 7;
    }
    return result;
  }
}
