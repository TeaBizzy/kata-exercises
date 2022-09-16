const makeCase = function(input, cases) {
 
  if(!Array.isArray(cases)) {
    cases = [cases];
  }

  let outputString = input
  for(let i = 0; i < cases.length; i++) {
    switch(cases[i]) {
      case "camel":
        outputString = camelCase(outputString);
        break;
      case "pascal":
        outputString = pascalCase(outputString);
        break;
      case "snake":
        outputString = snakeCase(outputString);
        break;
      case "kebab":
        outputString = kebabCase(outputString);
        break;
      case "title":
        outputString = titleCase(input);
        break;
      case "vowel":
        outputString = vowelCase(outputString);
        break;
      case "consonant":
        outputString = consonantCase(outputString);
        break;
      case "upper":
        outputString = upperCase(outputString);
        break;
    }
  }
  return outputString
}

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

const pascalCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(input[i - 1] === " " || i === 0) {
      outputString += input[i].toUpperCase();
  } else if (input[i] !== " ") {
    outputString += input[i];
  }
}
  return outputString;
};

const snakeCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(input[i] === " ") {
      outputString += "_";
  } else {
    outputString += input[i];
  }
}
  return outputString;
};

const kebabCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(input[i] === " ") {
      outputString += "-";
  } else {
    outputString += input[i];
  }
}
  return outputString;
};

const titleCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(input[i - 1] === " " || i === 0) {
      outputString += input[i].toUpperCase();
  } else {
    outputString += input[i];
  }
}
  return outputString;
};

const vowelCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(["a","e","i","o","u"].indexOf(input[i]) > -1) {
      outputString += input[i].toUpperCase();
  } else {
    outputString += input[i];
  }
}
  return outputString;
};

const consonantCase = function(input) {
  let outputString = ""
  for(let i = 0; i < input.length; i++) {
    if(["a","e","i","o","u"].indexOf(input[i]) === -1) {
      outputString += input[i].toUpperCase();
  } else {
    outputString += input[i];
  }
}
  return outputString;
};

const upperCase = function(input) {
  return input.toUpperCase();
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
