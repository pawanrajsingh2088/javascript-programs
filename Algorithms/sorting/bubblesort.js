// Ascending bubble sort with early exit
function bubbleSort(arr) {
  const a = arr.slice();           // keep input unchanged [web:53]
  for (let i = 0; i < a.length - 1; i++) {
    let swapped = false;           // optimization flag [web:53]
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {       // compare adjacent [web:66]
        [a[j], a[j + 1]] = [a[j + 1], a[j]]; // swap [web:53]
        swapped = true;
      }
    }
    if (!swapped) break;           // already sorted → stop [web:53]
  }
  return a;
}

// Example
console.log(bubbleSort([5, 1, 4, 2, 8])); // [1, 2, 4, 5, 8] [web:53]
