const express = require ('express');
const {products} = require("./config/data.js")
// const bp = require("body-parser")

// console.log(products);
const app = express();
// app.use(bp.urlencoded({extended:true}));
// app.use(bp.json());

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/', express.static(__dirname + "/public"));

app.listen(5000, () => {
    console.log("Run on 5000");
});

app.get("/api/products", (req,res) =>{
    res.json(products);
});

/**parametros */

app.get("/api/products/:id", (req, res) =>{
    // console.log(req.params);
    const {id} = req.params;
    const product = products.find((item) => item.id == id);
    if(!product)
        return res.json({msg: 'Product not found'})
    res.json(product);
});

/**query */

app.get("/api/search", (req, res) => {
    // console.log(req.query);
    const { name } = req.query;
    const filtered = products.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if (filtered.length === 0) {
        return res.status (404).json({msg: "no products match your search!!"});
    }
        res.json(filtered);
    });
    // res.send('ok');

/**Post Request */

app.post('/api/products', (req, res) => {
    console.log(req.body);
    const newProduct = {...req.body, id: products.length+1};
    products.push(newProduct);
    res.json(products);
})

/**Update Method -- PUT */
//** id - req.params */
/** name, price - req.body */

app.put("/api/products/:id", (req, res) =>{
const {id} =req.params;
const {name, price} = req.body;
const index = products.findIndex((item)=> item.id == id);
products[index]={
    ...products[index],
    name,
    price,
};
res.json(products);
});

//**Delete Method */
/** delete one product - id -req.params */

// app.delete('/api/products/:id', (req, res) => {
//     const productId = req.params.id;
//     const productIndex = products.findIndex(product => product.id === parseInt(productId));
//     const deletedProduct = products.splice(productIndex, 1)[0];
//     res.json(deletedProduct);
// });

app.delete('/api/products/:id', (req, res) => {
    const {id} = req.params;
    const index = products.findindex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({message: "not found"});
    }
    products.splice(index, 1);
    res.json(products);
});
