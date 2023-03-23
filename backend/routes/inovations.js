const express = require('express');
const Innovations = require('../models/inovations');

const router = express.Router();

router.post('/innovation/save', (req,res)=>{

    let newInnovation = new Innovations(req.body);

    newInnovation.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Innovation added successfully"
        });
    });

    
});

router.get('/innovation', (req,res) =>{
    Innovations.find().exec((err, innovations) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInnovations:innovations
        });
    });
});

router.put('/innovation/update/:id', (req,res) =>{
    Innovations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, innovation) => {
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

router.delete('/innovation/delete/:id', (req,res) =>{
    Innovations.findByIdAndRemove(req.params.id).exec((err, deletedInnovation) => {
        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return res.json({
            message:"Delete Successful",deletedInnovation
        });
    });
});


module.exports = router;