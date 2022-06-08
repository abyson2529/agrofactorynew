const mongoose = require("mongoose");
 
const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    date: {
      type: String,
    },
    imagename:{
      type: String
  }
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
module.exports = News;
