const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type:Number,
    },
    desc: {
      type: String,
    },
    quantity:{
        type: String
    },
    imagename:{
      type: String
    }
    
  },
  { timestamps: true }
);

const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema);
module.exports = Fertilizer;
