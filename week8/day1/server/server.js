const express = require("express");
const { products } = require("../config/data.js");
const product_router = require ('../routes/product.router.js');
const users_router = require('.routes/user.route.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on 3001");
});

/** server
 * comfig - conection to database
 * models queries to database/file
 * controllers - funtion implements code - request, response
 * routes - route for api
 */
/**
 * CRUD - Create, Read, Update, Delete
 * app.get - GET - retrieve data
 * app.post - POST send new data
 * app.delete - DELETE delete data
 * app.put - PUT modify data
 */


