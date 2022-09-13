function sumLargestNumbers(data) {
  if(data.length < 2) {
    console.log("Only 1 value was given, returning value as is.")
    return data[0];
  }
  let numOne = 0;
  let numbTwo = 0;

  for (let i = 0; i < data.length; i++) {
    if(data[i] > numOne) {
      numbTwo = numOne;
      numOne = data[i];
    } else if (data[i] > numbTwo) {
      numbTwo = data[i];
    }
  }

  return numOne + numbTwo
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));