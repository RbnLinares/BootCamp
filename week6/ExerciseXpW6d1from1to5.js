// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

//////////////////////////// Exercise #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console: The alert will display inside the funcOne function 3.
funcOne()

// #1.2 What will happen if the variable is declared 
// The value of a will be 3. This is because a is initially set to 5, which is greater than 1,
// so the condition in the if statement is true, and a is set to 3.

// with const instead of let ?
// The code will throw an error because const variables cannot be reassigned after their 
// initial assignment.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// The first alert will display inside the funcThree function 0 because funcThree is called 
// before funcTwo. The second alert will display inside the funcThree function 5 after funcTwo 
// is called.

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// If const is used instead of let, the code will throw an error in funcTwo because const 
// variables cannot be reassigned.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// The value of a will be "hello" after funcFour is called.
// The alert will display inside the funcFive function hello.

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// The alert will display inside the funcSix function test.

// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// If const is used instead of let, the code will not throw an error, but the behavior 
// will be the same because const does not affect the scope of the variable.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// The first alert will display in the if block 5 because a is redeclared within 
// the scope of the if block, shadowing the global a. The second alert will display 
// outside of the if block 2 because the a inside the if block does not affect the global a.

// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// The behavior will be the same because const does not affect the scope of the variable.


////////////////////////////// Exercise #2
// Step 1: Transform winBattle into an arrow function
const winBattle = () => true;

// Step 2: Create the experiencePoints variable
let experiencePoints;

// Step 3: Use a ternary operator to assign a value to experiencePoints
experiencePoints = winBattle() ? 10 : 1;

// Step 4: Log the value of experiencePoints to the console
console.log(experiencePoints);

////////////////////////////// Exercise #3

const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false

///////////////////////////// Exercise #4

const sum = (a, b) => a + b;

//////////////////////////// Exercise #5

// Function Declaration
function convertKgToGrams(kg) {
    return kg * 1000;
}

// Invocation
console.log(convertKgToGrams(2)); // 2000

// Function Expression
const convertKgToGrams = function(kg) {
    return kg * 1000;
};

// Invocation
console.log(convertKgToGrams(2)); // 2000

// Function Declaration: Defines a named function that can be called before it is defined in 
// the code. It is hoisted, meaning it can be called before its definition in the code.
// Function Expression: Defines a function as part of an expression, typically assigned to a 
// variable. It is not hoisted, meaning it cannot be called before its definition in the code.

// One Line Arrow Function
const convertKgToGrams = kg => kg * 1000;

// Invocation
console.log(convertKgToGrams(2)); // 2000


