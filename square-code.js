// Encodes a message using a square algorithm.
const squareCode = function(message) {
  message = message.replace(/ /g, "");  // Removes all spaces from the message.
  const maxRowSize = Math.ceil(Math.sqrt(message.length));
  const squaredMessage = convertMessageTo2DArray(message, maxRowSize)

  return encodeArrayToString(squaredMessage);
};

// Seperates a string into multiple arrays with a given length.
// Returns a 2D array
const convertMessageTo2DArray = function (message, maxRowSize) {
  const squaredMessage = [];
  let newRow = [];
  for(let i = 0; i < message.length; i++) {
    newRow.push(message[i])

    if(newRow.length == maxRowSize || i == message.length - 1) {
      squaredMessage.push(newRow);
      newRow = []
    }

  }

  return squaredMessage
}

// Converts each column of a 2d array into a string, seperated by a space.
const encodeArrayToString = function(squaredMessage) {
  newStr = ""
  let encodedMessage = []

  for(let c = 0; c < squaredMessage[0].length; c++) {
    for(let r = 0; r < squaredMessage.length; r++) {
      if(squaredMessage[r].length - 1 < c) {
        continue
      }
      newStr += squaredMessage[r][c];
    }

    encodedMessage.push(newStr);
    newStr = ""

  }

  return encodedMessage.join(" ")
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));