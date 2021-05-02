export function generatePrimeFactors(n: number): number[] {
  let primeFactors: number[] = [];
  for (let candidate = 2; candidate <= n; candidate++)
    for (; n % candidate === 0; n /= candidate) primeFactors.push(candidate);

  return primeFactors;
}
