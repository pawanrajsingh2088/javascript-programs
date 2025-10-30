function fibonacciSeries(n) {
  if (n <= 0) {
    console.log("Please enter a positive integer.");
    return;
  }

  let a = 0, b = 1;
  console.log("Fibonacci Series:");

  for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}


const n = 10;
fibonacciSeries(n);