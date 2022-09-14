const repeatNumbers = function(data) {
  let outputString = "";
  for(num of data) {
    let myString = ""
    for(let i = 0; i < num[1]; i++) {
      myString += num[0];
    }
    outputString += myString + ", "
  }
  return outputString.slice(0, outputString.length-2);
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
