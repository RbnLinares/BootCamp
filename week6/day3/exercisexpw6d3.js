/////***********Exercise 1////////////

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// OUTPUT: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

///////////*********** */ Exercise 2 ///////////////////

// function displayStudentInfo(objUser) {
//     const {first, last} = objUser;
//     const fullName = `${first} ${last}`;
//     return `Your full name is ${fullName}`;
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));

//////////********** */ Exercise 3 ///////////////////////

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const usersArray = Object.entries(users);
// const modifiedUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
// console.log(modifiedUsersArray);

///////************** */ Exercise 4 //////////////////////

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   const member = new Person('John');
//   console.log(typeof member);

// The output is Object

///////////-********** Exercise 5 //////////////////////

// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };

// Analyze the options below. Which constructor will successfully extend the Dog class?
 
    // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };
// This option does not call super(name) in the constructor, which is necessary to properly 
// initialize the parent class. 
// This means it will not correctly set the name property inherited from the Dog class.

  // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
// This option correctly calls super(name) to initialize the parent class, 
// which is necessary for the name property to be set correctly. 
// It also correctly sets the size property. 
// This is the correct way to extend a class in JavaScript.

  // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
// This option incorrectly tries to call super(name) without a name parameter 
// being passed to the constructor. This will 
// result in a ReferenceError because name is not defined in the scope of this constructor.

// 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };
// This option does not call super(name) at all, which means it will not correctly initialize 
// the parent class. This is incorrect because the Dog class constructor needs to be called 
// to properly set up the name property.

///////////*********** Exercise 6 */////////////

// [2] === [2] is False. In JavaScript, arrays are objects, and objects are compared by reference,
//  not by value. Even though the arrays contain the same value, they are different objects in memory.
// {} === {} is False. Similar to the first case.

// object1.number = 4; changes the number property of object1 to 4.

// object2 is a reference to object1, so when object1.number is changed, object2.number 
// reflects this change because they both point to the same object. 
// Therefore, object2.number will be 4.

// object3 is a reference to object2, which in turn is a reference to object1. 
// Therefore, changing object1.number also changes object3.number to 4.

// object4 is a separate object with its own number property, which is initially set to 5. 
// Changing object1.number does not affect object4.number because they are different objects.
//  Therefore, object4.number remains 5.

// class Animal {
//     constructor(name, type, color) {
//        this.name = name;
//        this.type = type;
//        this.color = color;
//     }
//    }
   
//    class Mamal extends Animal {
//     sound(sound) {
//        return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
//     }
//    }
   
//    const farmerCow = new Mamal('Lily', 'cow', 'brown and white');
//    console.log(farmerCow.sound('Moooo'));


   
















