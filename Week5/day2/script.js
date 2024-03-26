// let name = value
// let str = 'text'
// let num = 5
// let bool = 4 > 5;
// let void = null
// let un = undefined
// let arr = []
// let obj = {}


let str = '"``"'
let greeting = 'hello'
let name3 = 'Nadav'
let fullgreeting = greeting + name3
console.log(greeting, name3);

// let longstr = 'This is a very long string which need'+
// 'Y aqui sigue en ejemplo para ver que el mas'+
// 'hace que la frase se una sin espacios';

// let longstr = 'This is a very long string which need \
// Y aqui sigue en ejemplo para ver que el mas \
// hace que la frase se una sin espacios' ;
// console.log(longstr) //Impreme en la consola

// console.log(longstr.length); //Puedes ver la cantidad de caracteres
// console.log(longstr.indexOf('log')); // 
// console.log(longstr.substring(15, 19))
// let small = longstr.toLowerCase()
// let big = longstr.toUpperCase()

// // ----------------------------------------------------------------------

// let num2 = 15
// console.log(isNAN(num2)); // estas diciendo que no es numero
// let stringed = num2.toString()
// let frac = 7.446541651
// console.log(frac.toFixed());


// //------------------------------------------------------------------------

// let bool2 = true
// let checkbool = Boolean(bool2)
// console.log(checkbool);

// // let compare = 10 == 5
// let compare = 10 == '10'
// let not = (10==10)

// let or = 10 >5 

//-------------------------------------------------------

// alert // es solo un mensaje tipo ventana emergente
// alert('Hello Students')

// confirm('stas bien?') otra especie de ventana emergente pero puedes preguntar
// let conf = confirm('estas bien?')

// prompt('cual es tu nombre?') es otra ventana emergente pero el usuario puede responder y lo que escriba toma el valor de promp en str
// let prop = prompt('cual es tu nombre?')
// console.log(prop)

//-----------------------------------------------------------

// let numbers = [1,2,3,4,5]
// let colors = ['blue', 'red', 'green']
// colors[2] = 'pink' // cambia el color del que selecciones 
// console.log(colors); // me dara solo el color rojo en la consola que es 
// la pagina web + inspect
// colors.push('green') agraga el elemento al final de la lista
// colors.pop()// quita el ultimo elemento
// colors.shift() // quita el primer elemento
// colors.unshift('brown') // agrega algo al primer elemento de la lista
// colors.splice(0, 1) // remueve cosas de la lista, el primer numero es desde donde 
// empieza y el segundo numero es cuantos va a quitar despues
// colors.splice(0,0, 'yellow', 'orange') // empiezas de 0 luego quitas 0 y luego agregas 
// 2 colores yellow y orange, tambien sirve para agregar

// let sliced = colors(1, 3)// copia los colores de la lista original y los pega en una lista nueva
// el 1 es desde donde empieza y el 3 es en donde para

//------------------------------------------------------------------------

// Objetos
let obj2 = {
    key: 'value' //puede ser cualquier cosa, insluso otro objeto
}

let car = {
    owner: 'nadav',
    year: 2016,
    model: 'ford focus',
    thing: {
        key: 'value'
    }
}

// car.color = 'gold'// agraga cosas 
// car.year = 2019// cambia el anio
// delete car.thing // borra el elemento que elijas
// console.log(car['year']);
// o se puede hacer asi tambien
// console.log(car.model);
// console.log(car.thing.key)


if(car.year > 2020) {
    // console.log('thast a new car');
}
else if(car.year < 2005){
    // console.log('thats an old car');
}
else {
    // console.log('not a new car');
}

switch(car.owner){
    case 'Eduardo':
        // console.log('Eduardo`s cars');
    
    case 'nadav':
        // console.log(`thats nadav cars`);
        break
    case 'fred':
        // console.log(`whos fred anyways`);
        break
    default :
        // console.log(`this is the default`);
        break
}
// En switch despues de que encuentra el caso, imprime el resto de las ordenes 
// si no le pones break

// LOOP for y while
// for loop es para algo en concreto
// mientras while loop es infinito hasta que deje de ser cierto

let nums = [48, 35, 78, 12]

for (let index = 0; index < 10; index++) {
}

let counter = 0
while(counter < 10) {
    // console.log(counter);
    counter++
}
// Dependiendo de la posicion de lo que quieras hacer obtienes un resultado diferente

do {
    console.log(counter);
    counter++
    if (counter == 5){
        // break rompe el loop
        // continue va a seguir el loop pero va a saltar el numero 5 del ejemplo
    }
} while(counter < 10);

// SCOOP no tengo idea que es

var nadav = 'nadav'

