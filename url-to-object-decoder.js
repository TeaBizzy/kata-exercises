const urlDecode = function(text) {
  let newObj = {}
  const keyValuePairs = text.split("&");
  for (property of keyValuePairs) {
    const key = property.split("=")[0];
    let value = property.split("=")[1];
    value = value.replace(/%20/g, " ")
    newObj[key] = value;
  }
  return newObj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
