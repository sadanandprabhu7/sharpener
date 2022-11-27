const Product = require("../models/products");

exports.shopProducts = (req, res, next) => {
  Product.findAll()
    .then((data) => {
      res.json({ productDetails: data });
    })
    .catch((err) => {
      console.log(err);
    });
};
