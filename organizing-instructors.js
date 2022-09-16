const organizeInstructors = function(instructors) {
  
  let courseInstructors = {}

  for ( instructor of instructors) {
    switch(instructor.course) {
      case "iOS":
        if("iOS" in courseInstructors == false) {
          courseInstructors.iOS = [];
        }
        courseInstructors.iOS.push(instructor.name);
        break;
      case "Web":
        if("Web" in courseInstructors == false) {
          courseInstructors.Web = [];
        }
        courseInstructors.Web.push(instructor.name);
        break;
      case "Blockchain":
        if("Blockchain" in courseInstructors == false) {
          courseInstructors.Blockchain = [];
        }
        courseInstructors.Blockchain.push(instructor.name);
        break;
    }
  }

  return courseInstructors;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
