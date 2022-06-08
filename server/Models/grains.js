const mongoose = require("mongoose");

const grainSchema = new mongoose.Schema(
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
        type: String
    },
    imagename:{
      type: String
    }
  },
  { timestamps: true }
);

const Grain = mongoose.model("grain", grainSchema);
module.exports = Grain;
