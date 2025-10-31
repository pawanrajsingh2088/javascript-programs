function findLargest(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}


let input = prompt("Enter numbers separated by spaces:");
let numberArray = input.split(" ").map(Number);

let result = findLargest(numberArray);
console.log("The largest number is: " + result);
