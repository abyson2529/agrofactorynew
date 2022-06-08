const Fruit = require("../Models/fruits");

//image upload
const fileupload = require('express-fileupload')
const express =require ("express")
const app = express()
app.use(fileupload())

//Show List of Fruits
const showFruit = async (req, res, next) => {
  Fruit.find()
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
//Show List of Fruits
const showFruitById = async (req, res, next) => {
  Fruit.findById(req.body.fruitId)
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





//Add Fruits
const addFruit = async (req, res, next) => {

  const img_name = Date.now()+req.body.filename;
  const file = req.files.file;
  const newpath = __dirname + "/Images/";
  console.log(req.body);

  let fertilizer = new Fruit({
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

//Update Fruit
const updateFruit = async (req, res, next) => {
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

//Delete a Fruit
const deleteFruit = async (req, res, next) => {
  let fruitId = req.body.fruitId;
  Fruit.findByIdAndRemove(fruitId)
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
  showFruit,
  deleteFruit,
  addFruit,
  updateFruit,
  showFruitById
};
