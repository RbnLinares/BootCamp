// ////////////////////// Exercise 1

// const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(people.indexOf("Greg"), 1);

// const index = people.indexOf("James");
// if (index !== -1) {
//  people[index] = "Jason";
// }

// const yourName = "Ruben"; 
// people.push(yourName);

// const maryIndex = people.indexOf("Mary");
// console.log(maryIndex);

// const copyPeople = people.slice(0, people.indexOf("Mary"))
//  .concat(people.slice(people.indexOf("Mary") + 1, people.length - 1));

//  const fooIndex = people.indexOf("Foo");
// console.log(fooIndex); // This will return -1 because "Foo" is not in the array.

// const last = people[people.length - 1];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//    }
   
//    for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] === "Devon") {
//        break;
//     }
//    }
   
// /////////////////////////// Exercise 2

// const colors = ['blue', 'red', 'green', 'yellow', 'purple'];

// for (let i = 0; i < colors.length; i++) {
//     let position = i + 1; 
//     let suffix;
//     if (position % 10 === 1 && position !== 11) {
//         suffix = 'st';
//     } else if (position % 10 === 2 && position !== 12) {
//         suffix = 'nd';
//     } else if (position % 10 === 3 && position !== 13) {
//         suffix = 'rd';
//     } else {
//         suffix = 'th';
//     }

//     console.log(`My ${position}${suffix} choice is ${colors[i]}`);
// }

// ///////////////////////////////// Exercise 3

// let number = prompt("Please enter a number:");

// while (typeof number !== 'number') {
//     number = prompt("Invalid input. Please enter a number:");
// }

// while (number < 10) {
//     console.log(`The number ${number} is less than 10.`);

//     number = prompt("The number you entered is less than 10. Please enter a new number:");

//     while (typeof number !== 'number') {
//         number = prompt("Invalid input. Please enter a number:");
//     }
// }

// console.log(`The number ${number} is 10 or larger.`);

// ///////////////////////////////////////Exercise 4

// const building = {
//    numberOfFloors: 4,
//    numberOfAptByFloor: {
//        firstFloor: 3,
//        secondFloor: 4,
//        thirdFloor: 9,
//        fourthFloor: 2,
//    },
//    nameOfTenants: ["Sarah", "Dan", "David"],
//    numberOfRoomsAndRent: {
//        sarah: [3, 990],
//        dan: [4, 1000],
//        david: [1, 500],
//    },
// };

// console.log(`The building has ${building.numberOfFloors} floors.`);

// console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartments on the first floor.`);
// console.log(`There are ${building.numberOfAptByFloor.thirdFloor} apartments on the third floor.`);

// const secondTenant = building.nameOfTenants[1];
// const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant][0];
// console.log(`The second tenant is ${secondTenant} and he has ${secondTenantRooms} rooms.`);

// const sarahRent = building.numberOfRoomsAndRent.sarah[1];
// const davidRent = building.numberOfRoomsAndRent.david[1];
// const danRent = building.numberOfRoomsAndRent.dan[1];

// if (sarahRent + davidRent > danRent) {
//    building.numberOfRoomsAndRent.dan[1] = 1200;
//    console.log(`Dan's rent has been increased to 1200.`);
// } else {
//    console.log(`Dan's rent remains the same.`);
// }

// ////////////////////////// Exercise 5

// const family = {
//    father: "John",
//    mother: "Jane",
//    son: "Mike",
//    daughter: "Sara"
// };

// console.log("Keys of the family object:");
// for (let key in family) {
//    console.log(key);
// }

// console.log("Values of the family object:");
// for (let key in family) {
//    console.log(family[key]);
// }

// ///////////////////////////////// Exercise 6

// const details = {
//    my: 'name',
//    is: 'Rudolf',
//    the: 'raindeer'
//   };
  
//   let sentence = "";
  
//   for (let key in details) {
//    sentence += details[key] + " ";
//   }
  
//   sentence = sentence.trim();
  
//   console.log(sentence);

// ///////////////////////////// Exercise 7
   
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const societyName = names.map(name => name[0]).sort().join('');

console.log(societyName);



