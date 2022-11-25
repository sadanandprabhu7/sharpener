const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const Product = require('./Ecommerce/models/products');

const appEcommerce = express();

appEcommerce.use(cors());

appEcommerce.use(bodyParser.json({extended:false}))

appEcommerce.get('/products',(res,req,next)=>{
    Product.findAll().then(data=>{
        //console.log(products)
        req.json({productDetails:data})
    }).catch(err=>{
        console.log(err)
    })
})

Product
//.sync({force:true})
.sync()
.then(res=>{
    //console.log(res)
    appEcommerce.listen(3000);
})
.catch(err=>{
    console.log(err)
})

