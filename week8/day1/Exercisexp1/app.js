const express = require ('express');
const app = express();
const port = 3000;

const routes = require('./routes/route.js');

app.use('/', routes);

app.listen(port, () => {
 console.log(`Express app listening at http://localhost:${3000}`);
});