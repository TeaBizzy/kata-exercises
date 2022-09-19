const headings = {North: "north", East: "east", South: "south", West: "west"};

const blocksAway = function(directions) {

  let currentLocation = [0,0];
  let currentFacingDirection = ""

  for(let i = 0; i < directions.length; i+= 2) {
    currentFacingDirection = changeDirection(currentFacingDirection, directions[i]);
    switch(currentFacingDirection) {
      case headings.North:
        currentLocation[1] += directions[i + 1];
        break;
      case headings.East:
        currentLocation[0] += directions[i + 1];
        break;
      case headings.South:
        currentLocation[1] -= directions[i + 1];
        break;
      case headings.West:
        currentLocation[0] -= directions[i + 1];
        break;
    }
  }

  return {east: currentLocation[0], north: currentLocation[1]};
};

function changeDirection(currentFacingDirection, turn) {
  // Find our initial direction
  if(currentFacingDirection == "") {
    if(turn == "left") {
      return headings.North
    } else {
      return headings.East
    }
  }

  switch(currentFacingDirection) {
    case headings.North:
      if(turn == "left") {
        return headings.West;
      } else {
        return headings.East;
      }
    case headings.East:
      if(turn == "left") {
        return headings.North;
      } else {
        return headings.South;
      }
    case headings.South:
      if(turn == "left") {
        return headings.East;
      } else {
        return headings.West;
      }
    case headings.West:
      if(turn == "left") {
        return headings.South;
      } else {
        return headings.North;
      }
  }
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
