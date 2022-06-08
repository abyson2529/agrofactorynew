const AgriClass = require("../Models/agriClass");

//Show List of Agri_class
const showAgriClass = async (req, res, next) => {
  AgriClass.find()
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};





//Add Classes
const addAgriClass = async (req, res, next) => {
  let agriClass = new AgriClass({
    date:req.body.date,
    topic:req.body.topic,
    instructor:req.body.instructor,
    time:req.body.time,
    meetlink:req.body.meetlink,
  });
  agriClass
    .save()
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Update classes
const updateAgriClass = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    date:req.body.date,
    topic:req.body.topic,
    instructor:req.body.instructor,
    time:req.body.time,
    meetlink:req.body.meetlink,
  };
  AgriClass.findByIdAndUpdate(body.agriClassId, { $set: updatedUser })
    .then((user) => {
      return res.status(200).send({
        
        message: "Updated Details Successfully",
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

//Delete a Class
const deleteAgriClass = async (req, res, next) => {
  let AgriClassId = req.body.AgriClassId;
  AgriClass.findByIdAndRemove(AgriClassId)
    .then((product) => {
      return res.status(200).send({
        message: product,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        message: error.message,
      });
    });
};

module.exports = {
  showAgriClass: showAgriClass,
  deleteAgriClass: deleteAgriClass,
  addAgriClass: addAgriClass,
  updateAgriClass: updateAgriClass
};
