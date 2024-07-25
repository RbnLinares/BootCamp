/** Scope */
//let y = 9;
{
    let y = 8;
    console.log(y);
}
console.log(y);

for (let i = 0; i<5; i++) {
    console.log(i);
}

console.log(i);

//let y = 7;

function x() {
    let y = 5
    return y;
}
console.log(x());
console.log(y);

var y = 10;
{
    var y = 8;
    console.log(y);
}
console.log(y);
/// si el var esta dentro de {} sobreescribe el que esta afuera osea los dos consolelog serian 8


// hosting
console.log(a);

var a = "a";

console.log(a);

console.log(x());
function x(){
    return 5;
}

console.log(x());

//console.log(b);
let b = 'b'

console.log(b);
// con lot no queda grabada en la memoria, con var queda grabado en la memoria y puedes aceder en cualquier punto igual que con la funcion

// default parameter //

function sum(x, y) {
    return x + y
}
console.log(sum(3,5));

//conditional/ ternary operator */
let x = 5
let c ;
if (x < 5) {
    c = 0;
} else {
    c = 1;
}

let d = x < 5 ? 0 : 1;
console.log(d);

// ? = if  : else

function checkCentury(year) {
    if (year > 2000) {
      console.log("You are in the 21st century");
    } else {
      console.log("You live in the middle age");
    }
    return null;
  }
  // Example usage
  checkCentury(2023); // Should display "You are in the 21st century"
  checkCentury(1500); // Should display "You live in the middle age"

  //*template strings*/

  let name = "john";
  let last = "Doe";

  let greeting = "Hello," + name + "" + last ;
  console.log(greeting);

  let greeting2 = 'Hello, ${name} ${last}'; // todo en una sola linea
  console.log(greeting2);

  let greeting3 = `Hello,
  ${name} 
  ${last}`;
  console.log(greeting3); /// sale una cosa por linea 

  /** functions */
function sum(a,b) {
return a * b;    
}
console.log(sum(2,2));

const sum2 = function(a, b){
    return a + b;
}
console.log(sum2(2,2));

//* arrow function =>*/

const sum3 = (a,b) => {
    return a + b;
}
console.log(sum3(4,4));

const sum4 = (a, b) => a + b;
console.log(sum4(6,6));

/** no argument object in arrow function */

function print() {
    console.log(arguments[0], arguments[1], arguments[2]);    
}
print('hello',400,false)
/** no puedes hacer esto en => porque no puedes tener argumentos */

// const calculate = (num1, num2, operator) => 
// operator === '+' ? num1 + num2 :
// operator === '-' ? num1 - num2 :
// operator === '*' ? num1 * num2 :
// operator === '/' (num2 !== 0) ? a / b : "divition by zero" : "invalid operator";
  
  
//   // Example usage
//   console.log(calculate(5, 3, '+')); // Should display 8
//   console.log(calculate(10, 2, '-')); // Should display 8
//   console.log(calculate(4, 2, '*')); // Should display 8
//   console.log(calculate(7, 3, '%')); 

function nested() {
    let b = "outer variable";
    function innerNested() {
        console.log(b);
        let a = 'inner variable'
        console.log("Hello from inner");
    }
    // console.log(a); muestra error porque esta afuera del bloque de arriba
    return innerNested();
}
//   let result = nested()
//   result();
// nested()() es lo mismo que poner result

function sumA(a) {
    function sumB(b) {
        return a + b;
    }
    return sumB;
}
let res = sumA(5);
console.log(res);// vere la funcion
console.log(res(6));
console.log(res(7));
console.log(res(10));
  
let res1 = sumA(10);
console.log(res1); // vere la funcion
console.log(res1(6));
console.log(res1(7));
console.log(res1(10));

const sumAB = (a) => (b) => a + b;
console.log(sumAB(6)(7));

function multi(a, b) {
    return a * b  
}

function currying(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}
let curryMulti = currying(multi)
let currySum = currying(sum)

console.log(curryMulti);

console.log(curryMulti(2)(4));

// exercise about currying

const s = (num) => num * 2
const s1 = (num) => num + 1
const sumsum = (a,b) => (c) =>a(b(c));
console.log(sumsum(s,s1)(6));//resultado es 14
// el 6 es la c si vamos a las funciones dice que 6 las la fun s1 seria 6 mas 1 que es 7
// luego tenemos el 7 con la fun s que se multiplica por 2 y da 14

/// by value vs by reference*//

let a = 10;
//let b = a;
b = 5;

console.log(a , b);
let arr = [1,2,3];
//let arr1 = arr; //agarra el original y lo copia
let arr1 = [...arr] // clona el original para que no lo modifique
arr1[1] = 0;

console.log(arr, arr1);

//let obj = {
    a:1,
    b:2
//}
// let obj1 = obj;// agarra el original y lo modifica
let obj1 = Object.assign({}, obj);
obj1.b = 0;

console.log(obj, obj1);

let user = {
    name: "John",
    last: "Doe",
    address:{
        city: "Tel Aviv",
    },
};

let user1 = [...user]
user1.last = "king"
user1.address.city = 'Ramat Gan'
console.log(user, user1);

/**Object */
/** create object */

let dynamic = "city"// este ayuda para cambiar el nombre de un elemento a lo que desees
let obj = {
    name: "John",
    last: "Doe",
    age:26,
    [dynamic]: "tlv"
}
let obj1 = new Object()

console.log(obj.name);
console.log(obj["age"]);

let getname = "name";
console.log(obj[getname]);

obj.city = 'TLV'
obj[state] = 'Israel'

console.log(obj);

/**shorthand property/ key and value */

let username = "John";
let email = 'jj@gmail.com';
let age = 25;

let obj = {
    username,
    email,
    age
};

console.log(obj);

/** loop an object */

for(let x in obj){
    console.log(x, obj(x));
}
