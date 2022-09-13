function urlEncode(text) {
  let encodedString = ""
  for(let i = 0; i < text.length; i++) {
    if(text[i] === " ") {
      encodedString += "%20";
    } else {
      encodedString += text[i];
    }
  }

  return encodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
