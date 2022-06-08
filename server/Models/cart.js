const mongoose = require("mongoose");
 
const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" ,require:true},
    productId: { type: mongoose.Schema.Types.ObjectId},
    quantity: {
      type:Number,
    },
    category:{
      type:String
    }
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
