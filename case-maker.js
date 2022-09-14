const camelCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(input[i - 1] === " ") {
      outputString += input[i].toUpperCase();
  } else if (input[i] !== " ") {
    outputString += input[i];
  }
}
  return outputString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
