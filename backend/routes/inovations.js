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

module.exports = router;