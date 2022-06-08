const Grain = require("../Models/grains");

//image upload
const fileupload = require('express-fileupload')
const express =require ("express")
const app = express()
app.use(fileupload())

//Show List of Grains
const showGrain = async (req, res, next) => {
  Grain.find()
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

//Show List of Grains
const showGrainById = async (req, res, next) => {
  Grain.findById(req.body.grainId)
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



//Add Grains
const addGrain = async (req, res, next) => {

   //image upload
   const img_name = Date.now()+req.body.filename;
   const file = req.files.file;
   const newpath = __dirname + "/Images/";
    console.log(req.body);

  let fertilizer = new Grain({
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

//Update Grain
const updateGrain = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Fruit.findByIdAndUpdate(body.fruitId, { $set: updatedUser })
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

//Delete a Grain
const deleteGrain = async (req, res, next) => {
  let GrainId = req.body.grainId;
  Grain.findByIdAndRemove(grainId)
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
  showGrain,
  deleteGrain,
  addGrain,
  updateGrain,
  showGrainById
};
