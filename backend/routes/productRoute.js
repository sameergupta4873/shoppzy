const express = require('express');
const Product = require('../models/ProductModel');
const asyncHandler = require('express-async-handler');

const router = express.Router();
router.get("/products", asyncHandler(async(req,res) => {
    const products = await Product.find({});
    res.json(products);
})
);

router.get("/products/:id", asyncHandler(async(req,res) => {
    const products = await Product.findById(req.params.id);
    if(products){
        res.json(products);
    }else{
        res.status(500).json({message: 'Product not Found'})
    }
    
})
);

module.exports = router;