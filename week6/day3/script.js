/**
Given n, take the sum of the digits of n.
If that value has more than one digit,
continue reducing in this way until a single-digit
number is produced.
This is only applicable to the natural numbers.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

// function sumOfDigits(n) {
//     // Convert the number to a string to easily access each digit
//     let nStr = n.toString();
    
//     while (nStr.length > 1) {
//         // Initialize a variable to hold the sum of the digits
//         let sumDigits = 0;
        
//         // Iterate through each character in the string, converting it back to an integer and adding it to the sum
//         for (let i = 0; i < nStr.length; i++) {
//             sumDigits += parseInt(nStr[i]);
//         }
        
//         // Convert the sum back to a string for the next iteration
//         nStr = sumDigits.toString();
//     }
    
//     // Return the final single-digit sum
//     return parseInt(nStr);
// }

// // Test cases
// console.log(sumOfDigits(16)); // Output: 7
// console.log(sumOfDigits(942)); // Output: 6
// console.log(sumOfDigits(132189)); // Output: 6
// console.log(sumOfDigits(493193)); // Output: 2

////////////////** Object Method */

// let user = {
//     name: 'Jhon',
//     email: 'jjj@gmail.com',
//     age: 26,
//     address:{
//         city:'Tel Aviv'
//     },
// };
//////////// este es un objeto ////////////

// const [a, b] = [2, 4];
// const {name, email, age, address:{city}} = user
// console.log(city);

// function getuserinfo({name, email, age, address:{city}}) {
//     return city
// }

// console.log(getuserinfo(user));

// for(let x in user){
//     console.log(x, user[x]);
// }

// //////* Object.keys///
// let keys = Object.keys(user);
// // console.log(keys);

// //////* Object.values* ///
// let values = Object.values(user)
// // console.log(values);

// ////////* Objects.entries* //////
// let entries = Object.entries(user)
// // console.log(entries);

// ////////////////////los 3 son los mismos
// entries.forEach((item) => {
//     const [key, value] = item
//     // console.log(item);
// })
// entries.forEach(([key, value]) => {
//     // const [key, value] = item
//     // console.log([key, value]);
// })
// entries.forEach(([a, b]) => {
//     // const [key, value] = item
//     // console.log([a, b]);
// })

// let arr = [
//     ["name", "John"],
//     ["email", "jjj@gmail.com"],
//     ["age", 26],
//   ];
  
//   /** Object.fromEntries */
//   let obj = Object.fromEntries(arr);
//   console.log(obj);


// let user = {
//     name: 'Jhon',
//     email: 'jjj@gmail.com',
//     age: 26,
//     address:{
//         city:'Tel Aviv'
//     },
    // x: function (name){////////////// las funciones no se aplican en los JSON
    //     return "Hello" + name/////// si tiene una funcion es mejor no usar JSON
    // }
// };

// let user1 = {...user};
//////asi clonas el objeto/////////

////////////*JSON*/////////////////
// los reconoces porque tienen "" esas comillas en Key y en value

// let userJson = JSON.stringify(user);//para combertir de Objeto en JSON
// console.log(user);
// console.log(userJson);

// let user1 = JSON.parse(userJson) ////Para combertir de Json a Objeto
// console.log(user1);


// let user = {
//     name: 'Jhon',
//     email: 'jjj@gmail.com',
//     age: 26,
// };

// /////////*OBJ Spreading*///////// sirve para cambiar los valores de las llaves de el objeto en una linea
// let user1= {...user, name: 'Marry', status: 'Single'}
// // user1.name = 'Marry'
// console.log(user);
// console.log(user1);

//////*This*/////// se refiera a la ventana del objeto
// console.log(this);///////// te muestra una lista 

let obj = {
    name: 'Jhon',
    getName: function(){
        return this.name;
    }
}
// console.log(obj.getName());

//////* Class *//////////

class Animal{
    constructor(type, name){
        this.type = type
        this.name = name
    }
    get(){
        return this.type
    }
    setName(name){
        this.name = name;
    }
    getTypeandName(){
        returnthis.type + '' + this.name;
    }
}

let myDog = new Animal();
let urDog = new Animal();
urDog.setName('TETE')
// console.log(myDog);
// console.log(urDog);

class Dog extends Animal { ////////// tomamos todo los datos de la class Animal
    constructor(name){
        super('Dog', name); 
    }
}
class Cat extends Animal { ////////// tomamos todo los datos de la class Animal
    constructor(name){
        super('Cat', name); 
    }
    setType(param){
        this.type = param;
    }
    //////si escribo aqui getType sobreescribo el que esta en la otra lista y se aplica este
}

let dog1 = new Dog('Shadow');
let cat1 = new Cat('pussy');
cat1.setType('persian')
console.log(dog1);
console.log(cat1);


/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exextends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */
// Step 1: Create the User class

class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello', this.name);
    }
}

class Student extends User {
}

const students = [
    new Student("Sergey"),
    new Student("Meir"),
    new Student("Yehonatan")
];

students.forEach(student => student.hello());
