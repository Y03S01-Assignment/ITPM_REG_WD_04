const mongoose = require('model');

const servicesSchema = new mongoose.Schema({

        fname:{
        type:Sring,
        required:true
    },

    lname:{
        type:String,
        required:true
    },
    email:{
        type:email,
        required:true
    },
    Servicetype:{
        type:String,
        required:true
    },
    Discription:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Services', servicesSchema)