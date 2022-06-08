const chatBots = require("../Models/chatbot")
const chatbot = async (req, res, next) => {
  const chatBot = new chatBots({
    submit: req.body.submit,
    firstname: req.body.firstname,
    email: req.body.email,
    query: req.body.query,
  });
  var response = await chatBot
    .save()
    .then((response) => {
      res.json({
        message: response,
      });
    })
    .catch((error) => {
      res.json({
        message: error.message,
      });
    });
};
module.exports = {
    chatbot
}