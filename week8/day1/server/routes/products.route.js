const express = require ('express')
conts { products } = require ('../../config/data.js')

const router = express.Router();

/** Read - get - get all products */
router.get("/api/products", (req, res) => {
    res.json(products);
  });

  /** Read - get - get on product with the id */
router.get("/api/products/:id", (req, res) => {
    // console.log(req.params)
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    if (!product) {
      return res.sendStatus(404);
    }
    res.status(200).json(product);
  });

  router.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((item) => item.id == id);
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
    products.splice(index, 1);
    res.json(products);
  });
  
  /** Update - PUT - modify a product
   * id -> params
   * data -> name, price -> json in body
   *
   */
  router.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const index = products.findIndex((item) => item.id == id);
  
    if (index === -1) {
      return res.status(404).json({ msg: "not found" });
    }
  
    products[index] = {
      ...products[index],
      name,
      price,
    };
  
    res.json(products);
  });
  
  /** Create - POST - to create a new product */
  router.post("/api/products", (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.json(products);
  });
  
  /** Read -get - search for a product with the name
   * name includes -
   */
  router.get("/api/search", (req, res) => {
    const { q } = req.query;
    const filterd = products.filter((item) => {
      return item.name.toLowerCase().includes(q.toLowerCase());
    });
    if (filterd.length === 0) {
      return res.status(404).json({ msg: "no product matched your search" });
    }
    res.status(200).json(filterd);
  });

module.exports = router;

