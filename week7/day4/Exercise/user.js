const {getUser} = require('./fetch.js')

getUser('https://jsonplaceholder.typicode.com/users').then ((users) => console.log(users));


