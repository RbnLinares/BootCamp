//DOM 

console.log('DOM class')

// How to get Elements by attributes of the objects
// retrieving elements using the body tag
let title = document.body.firstElementChild
console.log(title)

// title.textContent = 'Hello Ruben'

let bodyChildren = document.body.children
let mainDiv = document.body.children[1]
// console.log(bodyChildren) // me da los index de cada cosa que esta en el body

title.style.color = 'blue'

let divUser = document.body.children[2]
let divUser2 = document.body


// user = ['Mark', 'Ariel', 'Livnat']

// Como obtener los elementos por los metodos

let divMain = document.getElementById('main') // colocando el nombre de el ID como sale en el documento HTML
console.log(divMain)

let firstP = divMain.firstElementChild
firstP.innerHTML = 'I want to play soccer and baseball'/// como ya puse lo que era el div antes ahora puedo seleccionar elementos dentro de este y cambiar lo que sea necesario

let allP = document.getElementsByTagName('p')
console.log(allP) //// asi selecciono todos los elementos del mismo nombre

/// Crear nuevos Elementos
/// primero buscamos en donde lo queremos crear
let divMain = document.getElementById('main')
/// creamos en elemento
let newP = document.createElement('p')
/// crear el contenido
 let pContent = document.createTextNode('Its almost lunch and we wanna eat')
 /// agragar el contenido al elemento
 newparagraph = newP.appendChild(pContent)
 /// agragar el elemento a la seccion
 divMain.appendChild(newparagraph)

