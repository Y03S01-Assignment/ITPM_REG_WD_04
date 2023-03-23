const mongoose = require("mongoose");

const innovationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },

});

module.exports = mongoose.model("Innovations", innovationSchema);
