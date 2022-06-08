const mongoose = require("mongoose");

const vegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    desc: {
      type: String,
    },
    quantity:{
        type: Number,
    },
    imagename:{
      type: String
    }
  },
  { timestamps: true }
);

const Vege = mongoose.model("vege", vegeSchema);
module.exports = Vege;
