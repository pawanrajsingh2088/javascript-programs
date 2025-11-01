function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // found
    }
  }
  return -1; // not found
}

function main() {
    // Sample input
  const arr = [10, 25, 30, 45, 50, 75];
  const target = 45;

  const result = linearSearch(arr, target);

  if (result !== -1)
    console.log(`Element ${target} found at index ${result}`);
  else
    console.log(`Element ${target} not found in the array`);
}

main();
