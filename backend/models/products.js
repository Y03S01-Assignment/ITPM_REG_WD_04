const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    Fullname:{
        type:String,
        required:true
    },

    Residentaddress:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phonenumber:{
        type:Number,
        required:true
    },

    category:{
        type:String,
        enum: ['Solar Panels','LED Lights']
    },

});

module.exports = mongoose.model('Products', postSchema)