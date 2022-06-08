const mongoose = require("mongoose");
 
const agriClassSchema = new mongoose.Schema(
  {
    date: {
      type: String,
    },
    topic: {
      type: String,
    },
    instructor: {
      type: String,
    },
    time:{
        type: String
    },
    meetlink:{
        type: String
    }

  },
  { timestamps: true }
);

const AgriClass = mongoose.model("AgriClass", agriClassSchema);
module.exports = AgriClass;
