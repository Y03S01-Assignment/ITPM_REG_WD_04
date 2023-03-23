const express = require('express');
const Products = require('../models/products');

const router = express.Router();

router.post('/products/save', (req, res) => {  
    
    let newProduct = new Products(req.body);

    newProduct.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Product saved successfully"
        });
    });
});


router.get('/products', (req, res) => {
    Products.find().exec((err, products) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingProducts:products
        });
    });
});



router.put('/products/update/:id', (req, res) => {
    Products.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, product) => {
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});


router.delete('/products/delete/:id', (req, res) => {
    Products.findByIdAndRemove(req.params.id).exec((err, deletedProduct) => {
        if(err) return res.status(400).json({
            message:"Delete Unsuccessful", err
        });

        return res.json({
            message:"Delete Successful", deletedProduct
        });
    });
});













module.exports = router;