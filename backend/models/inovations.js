const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  innovator: {
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

module.exports = mongoose.model("Innovatons", postSchema);
