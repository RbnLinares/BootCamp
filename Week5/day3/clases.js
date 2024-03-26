// // JS function

// function funcName(){
//     console.log('JS functions')
// }

// funcName()

// function getEmail(user_name, birthday){
//     let email = `${user_name.toLowerCase()+birthday}@gmail.com`
//     return email
// }

// console.log(getEmail('Ruben'))

// // Local variables

// function getEmail(user_name, birthday){
//     let email = `${user_name.toLowerCase()+birthday}@gmail.com`
//     return email
// }

// console.log(email) // da error porque no has dicho las variables

// let eyeColor = 'Blue'
// function userMoreInfo(user_name, userAge){
//     console.log('My name is' + userName + 'my age is' + userAge + 'my eye color is' + eyeColor)
// }
// userMoreInfo('Ruben', 38)


// function logAges(myAge) {
//     const mumAge = myAge * 2;
//     const dadAge = mumAge * 1.2;

//     console.log(`My mum is ${mumAge} years old.`);
//     console.log(`My dad is ${dadAge} years old.`);
// }

// logAges(20); 

// Exceptions.js Sirve para seguir el programa asi tenga un error

// console.log(notdefinedvariable)
// console.log('continue the code')

// let notdefinedvariable = 'hello'

// try{
//     console.log(notdefinedvariable)
// } catch (error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }
// console.log('continue the code')

// Throw Operator 

function division(a,b){
    if (b === 0){
        throw new Error('Cant divide by zero')
    } else{
    result = a/b
    return result
    }
}

console.log(division(15, 0))