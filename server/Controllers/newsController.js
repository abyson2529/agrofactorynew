const News = require("../Models/news");
//image upload
const fileupload = require('express-fileupload')
const express =require ("express")
const app = express()
app.use(fileupload())

//Show List of Fertilizer
const showNews = async (req, res, next) => {
  News.find()
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





//Add news
const addNews = async (req, res, next) => {

  const img_name = Date.now()+req.body.filename;
  const file = req.files.file;
  const newpath = __dirname + "/Images/";
   console.log(req.body);

  let fertilizer = new News({
    title:req.body.title,
    description:req.body.description,
    date:req.body.date,
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
const updateNews = async (req, res, next) => {
  let body = req.body;
  let updatedUser = {
    title: body.title,
    description: body.description,
    date: body.date,
    image: body.image
  };
  News.findByIdAndUpdate(body.newsId, { $set: updatedUser })
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
const deleteNews = async (req, res, next) => {
  let newsId = req.body.newsId;
  News.findByIdAndRemove(newsId)
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
  showNews,
  deleteNews,
  addNews,
  updateNews
};
