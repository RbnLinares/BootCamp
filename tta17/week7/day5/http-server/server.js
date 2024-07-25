const http = require ('http');

const server = http.createServer((request,Response) => {
    /**send response */
    // Response.end('My first http server')

if (request.url === '/useres') {
    if (request.method === "GET") {
    let users = [
        {name:'jhon', age: 25},
        {name:'Linda', age: 35},
        {name:'Eduard', age: 48},
    ];
    Response.end(JSON.stringify(users));
    } else if (request.method === "POST"){
    }
}
else {
    Response.end('I dont know what do you want from me')
}});

server.listen(3001)
