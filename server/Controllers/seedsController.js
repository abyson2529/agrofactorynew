const Seed = require("../Models/seeds");
//image upload
const fileupload = require('express-fileupload')
const express =require ("express")
const app = express()
app.use(fileupload())


//Show List of seed
const showSeed = async (req, res, next) => {
  Seed.find()
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

//Show List of Seeds
const showSeedById = async (req, res, next) => {
  Seed.findById(req.body.seedId)
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





//Add seed
const addSeed = async (req, res, next) => {

  //image upload
  const img_name = Date.now()+req.body.filename;
  const file = req.files.file;
  const newpath = __dirname + "/Images/";
   console.log(req.body);
   
  let fertilizer = new Seed({
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

//Update seed
const updateSeed = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Seed.findByIdAndUpdate(body.seedId, { $set: updatedUser })
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

//Delete a seed
const deleteSeed = async (req, res, next) => {
  let seedId = req.body.seedId;
  Seed.findByIdAndRemove(seedId)
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
  showSeed,
  deleteSeed,
  addSeed,
  updateSeed,
  showSeedById
};
