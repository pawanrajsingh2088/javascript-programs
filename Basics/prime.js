// Function to check primes using the Basic Method
function basicPrimes(n) {
  const primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

// Function to find primes using Sieve of Eratosthenes
function sievePrimes(n) {
  const isPrime = new Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime
    .map((prime, i) => (prime ? i : null))
    .filter((num) => num !== null);
}

// Example usage
const n = 30;

console.log("Prime numbers up to", n, "(Basic Method):");
console.log(basicPrimes(n).join(", "));

console.log();

console.log("Prime numbers up to", n, "(Sieve Method):");
console.log(sievePrimes(n).join(", "));
