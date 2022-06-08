const Machinery = require("../Models/machinery");

  //image upload
  const fileupload = require('express-fileupload')
  const express =require ("express")
  const app = express()
  app.use(fileupload())

//Show List of Machinery
const showMachinery = async (req, res, next) => {

  Machinery.find()
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

//Show List of Machinery
const showMachineryById = async (req, res, next) => {
  Machinery.findById(req.body.machineryId)
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



//Add Machinery
const addMachinery = async (req, res, next) => {

  const img_name = Date.now()+req.body.filename;
  const file = req.files.file;
  const newpath = __dirname + "/Images/";
  console.log(req.body);

  let fertilizer = new Machinery({
    name:req.body.name,
    price:req.body.price,
    desc:req.body.desc,
    quantity:req.body.quantity,
    imagename:img_name,
  });
  fertilizer
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
    //image upload
    file.mv(`${newpath}${img_name}`,(err)=>{
      if(err){
        console.log(err);
         
          }
    })
};

//Update Fertilizer
const updateMachinery = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Machinery.findByIdAndUpdate(body.machineryId, { $set: updatedUser })
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

//Delete a Fertilizer
const deleteMachinery = async (req, res, next) => {
  let machineryId = req.body.machineryId;
  Machinery.findByIdAndRemove(machineryId)
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
  showMachinery,
  deleteMachinery,
  addMachinery,
  updateMachinery,
  showMachineryById
};
