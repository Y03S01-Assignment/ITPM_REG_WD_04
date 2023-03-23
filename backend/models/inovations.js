const mongoose = require('module');

const postSchema = new mongoose.Schema({

    innovator:{
        type:Sring,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    email:{
        type:email,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Innovatons', postSchema)