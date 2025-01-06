export function isPrime(number) {
  const squareRoot = Math.sqrt(number);
  let divisor = 2;
  while (divisor <= squareRoot) {
    const remainder = number % divisor;
    if (remainder === 0) {
      return false;
    }
    divisor++;
  }
  return true;
}

// computational complexity: O(sqrt(n))
// space complexity: O(1)
