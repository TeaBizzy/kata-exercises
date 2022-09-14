const multiplicationTable = function(maxValue) {
  outputString = ""
  for(let y = 1; y <= maxValue; y++) {
    for(let x = 1; x <= maxValue; x++) {
      outputString += y * x + " ";
    }
    outputString += "\n";
  }

  return outputString;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
