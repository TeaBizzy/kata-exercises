function instructorWithLongestName(instructors) {
  let longestIndex = 0;

  for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].name.length > instructors[longestIndex].name.length) {
      longestIndex = i;
    }
  }

  return instructors[longestIndex];
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
