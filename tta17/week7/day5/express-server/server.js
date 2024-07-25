const express = require('express');

const app = express();

app.listen(5000, ()=>{
    console.log('run on 5000');
})

app.use('/', express.static(__dirname + '/public'))

app.get('/users', (req, res) => {
    res.json(users)
});

let users = [
    {name:'jhon', age: 25},
    {name:'Linda', age: 35},
    {name:'Eduard', age: 48},
];

