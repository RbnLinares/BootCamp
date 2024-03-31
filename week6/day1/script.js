/** scope */

// {
//   let x;
//   var x = 6;
//   console.log('in scope=>', x);
// }
// console.log('out scope=>',x);
// for (var index = 0; index < 5; index++) {}

// console.log(index);
// let x = 5;
// function y(){
//     let x = 6;
//     console.log(x);
// }
// y()
// console.log(x);

/** default parameters */
// function sum(a = 1, b = 1) {
//     console.log(a+b);
// }
// sum(undefined, 3)

/** Conditional operator */
// let y;
// let x = 2;
// if (x > 3) {
//   y = true;
// } else {
//   y = false;
// }
// console.log(y);

// let y = x > 3 ? true : false;
// console.log(y);

/** template string */

// let name = 'John';
// let last = 'Due'
// let greeting = 'Hello, ' + name + "," + last;
// // console.log(greeting);

// let greeting2 = `Hello,  ${name} ,${last}` + " welcome";
// console.log(greeting, greeting2);

/** function */
// function getName(a, b) {
//   //   let arr = [];
//   //   arr.push(a + b);
//   //   arr.push(a * b);
//   //   return a +b;
//   //   return a*b;
//   for (let index = 0; index < 5; index++) {
//     if (index > 10) return index;
//   }
//   return -1;
// }
// let ab = sum(2, 4);
// console.log();

// let a = y();
// console.log(a);

// function y() {
//   return x();
// }

// function x() {
//   return 5;
// }

// const gretting = function (name) {
//   return `Hello, ${name}`;
// };

// console.log(gretting(2));

/** Arrow function */

// const greeting = () => `Hello, ${name}`;
// console.log(greeting());

/** nested function */

// function x() {
//   let a = 7;
//   function y() {
//     let b = 8
//     return a + b;
//   }

//   return y;
// }

// let a = x()();
// console.log(a);

/** currying */
// const y = (a) => (b) => a * b;

// let productVAT = y(1.18);
// console.log(productVAT(60));
// console.log(productVAT(100));

/** compose */

// const sum2 = (num) => num * 2;
// const sum = (num) => num + 1;

// const x = (a, b) => (c) => a(12);

// let result = x(sum, sum2)(6);

// console.log(result);

/** by value vs. br reference */

// let a = 5;
// let b = a;
// b = 6;

// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];

// let arr2 = [].concat(arr); //[...arr];

// arr2[1] = 5;

// console.log(arr);
// console.log(arr2);

// let obj = {
//   a: 10,
//   b: {
//     c:5
//   }
// };

// let obj2 = { ...obj }; //Object.assign({}, obj); //{...obj}

// obj2.b.c = 22;

// console.log(obj);
// console.log(obj2);

// let user = {};
// let post = new Object();

// user.name = "Jonh";
// user["email"] = "jjj@@gmail.com";

// console.log(user["name"]);

let email = "jhon@gmail.com";
let name;
let user = {
    email,
    name,
}
user.name='aaaaaaa'
console.log(user);

for(let x in user){
    console.log(x, user[x]);
}