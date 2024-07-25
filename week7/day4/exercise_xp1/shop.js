const products = require('./products');

function findProductByName(productName) {
 const product = products.find(p => p.name === productName);
 if (product) {
    console.log(`Product Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
}
}

findProductByName('Apple');
findProductByName('Bread');

