const Vege = require("../Models/vege");

//image upload
const fileupload = require('express-fileupload')
const express =require ("express")
const app = express()
app.use(fileupload())

//Show List of Vege
const showVege = async (req, res, next) => {
  Vege.find()
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
//Show List of veges
const showVegeById = async (req, res, next) => {
  Vege.findById(req.body.vegeId)
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





//Add vege
const addVege = async (req, res, next) => {

  const img_name = Date.now()+req.body.filename;
  const file = req.files.file;
  const newpath = __dirname + "/Images/";
  console.log(req.body);

  let fertilizer = new Vege({
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

//Update vege
const updateVege = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    name: body.name,
    price: body.price,
    desc: body.desc,
    quantity: body.quantity
  };
  Vege.findByIdAndUpdate(body.vegeId, { $set: updatedUser })
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

//Delete a Fruit
const deleteVege = async (req, res, next) => {
  let vegeId = req.body.vegeId;
  Vege.findByIdAndRemove(vegeId)
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
  showVege,
  deleteVege,
  addVege,
  updateVege,
  showVegeById
};
