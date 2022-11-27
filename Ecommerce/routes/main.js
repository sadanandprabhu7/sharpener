const express = require("express");

const shopControllers = require("../controllers/shop");

const cartControllers = require("../controllers/cart");

const router = express.Router();

router.get("/products", shopControllers.shopProducts);

router.post("/cart", cartControllers.cartDetails);

module.exports = router;
