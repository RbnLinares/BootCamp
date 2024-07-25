// const {multi, divide, plus, minus,} = require("./math.js")
import {multi, divide, plus, minus,} from "./math.js"
console.log(multi(10,5));
console.log(divide(10,5));
console.log(plus(10,5));;
console.log(minus(10,5));

//* Para instalar el package.json debes colocola npm install en la terminal//

// console.log('hello to node.js');

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// let arr = [1,2,3,4];

// let arr2 = arr.map(item => item*2)
// console.log(arr2);

/** Module System */

let a = 10
const hello = (name) => {
    return `Hello, ${name}, welcome to day 1 of Nodejs`
}
// console.log(hello('Dan'));

const getFullName = (first, last) => {
    return first + " " + last;
}

// module.exports = {
//     hello,
//     a,
// };


