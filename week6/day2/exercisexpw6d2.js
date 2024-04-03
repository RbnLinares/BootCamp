///////////************ Exercise 1 */////////////

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// // Displaying the colors in the specified order
// colors.forEach((color, index) => {
//  console.log(`${index + 1}# choice is ${color}.`);
// });

// // Checking if the array contains the value "Violet"
// if (colors.includes("Violet")) {
//  console.log("Yeah");
// } else {
//  console.log("No...");
// }

///////////////******Exercise 2 *//////////////////

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//  const suffix = index < 4 ? ordinal[index] : ordinal[0]; // For 1st, 2nd, 3rd, 4th
//  const ordinalNumber = index < 4 ? index + 1 : index + 1; // For 1st, 2nd, 3rd, 4th

//  console.log(`${ordinalNumber}${suffix} choice is ${color}.`);
// });

/////////////////******* Exercise 3 *//////////////////
  //1
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// OUTPUT: ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

  //2
// const country = "USA";
// console.log([...country]);

// OUTPUT: ['U', 'S', 'A']

  //3
// let newArray = [...[,,]];
// console.log(newArray);

// OUTPUT: [undefined, undefined]

////////////************* Exercise 4 *//////////

// const users = [
//     { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
//    ];
   
//    const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
//    console.log(welcomeStudents);

//    const fsr = users.filter(user => user.role === 'Full Stack Resident');
//    console.log(fsr);
   
//    const fsrLastNames = users
//  .filter(user => user.role === 'Full Stack Resident')
//  .map(user => user.lastName);

// console.log(fsrLastNames);

///////////////********* Exercise 5 *//////////////

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const combinedString = epic.reduce((word, value) => {
//  return word + ' ' + value;
// }, '');

// console.log(combinedString);

//////////////*********** Exercise 6 *//////////////

const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
   ];
   
   const passedStudents = students.filter(student => student.isPassed);
   console.log(passedStudents);

   passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
   });
   
   







