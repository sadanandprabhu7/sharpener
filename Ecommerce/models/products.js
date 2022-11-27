<<<<<<< HEAD
const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
=======
const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Product = sequelize.define('product',{

    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false

    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

module.exports=Product;
>>>>>>> aaa54f26772c7664c79f502f4086154d077bda3f
