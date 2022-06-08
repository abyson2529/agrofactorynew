var mongoose = require("mongoose");
var chatBot = new mongoose.Schema({
  submit: { type: String },
  firstname: { type: String },
  email: { type: String },
  query: { type: String },
});
module.exports = mongoose.model("chatBot", chatBot);