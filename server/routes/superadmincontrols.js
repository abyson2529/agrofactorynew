const express = require("express");
const router = express.Router();

const UserController = require("../Controllers/superAdminController");
const ProductController = require("../Controllers/productController");
const CategoryController = require("../Controllers/categoryController");
const DiscountController = require("../Controllers/discountController");
const { route } = require("./authentication");
const Authenticate = require("../Middleware/authenticate");
const AdminGenerator = require("../Controllers/admingenerator");
const productController = require("../Controllers/productController");
const machineryController = require("../Controllers/machineryController");
const seedController = require("../Controllers/seedsController");
const fruitController = require("../Controllers/fruitsController");
const vegeController = require("../Controllers/vegeController");
const grainController = require("../Controllers/grainsController");
const newsController = require("../Controllers/newsController");
const agriClassController = require("../Controllers/agriClassController");            
const cartController = require("../Controllers/cartController");            

/*To access these routes admin authentication is needed in the header............User should be an admin*/
/*To do so, copy the token of the admin when you login and paste it in the header with name Authorization and value as Bearer 'tokenvalue'*/

//Shows users
router.get("/showUsers", Authenticate, UserController.index);
router.post("/userprofile", Authenticate, UserController.newshow);
router.get("/showFarmers", Authenticate, UserController.showFarmers);
router.get("/showCustomers", Authenticate, UserController.showCustomers);

////

//Select individual Users
router.post("/showUser", Authenticate, UserController.show);

//add New User
router.post("/addUser", Authenticate, UserController.store);

//Change Password
router.post("/changePass", Authenticate, UserController.update);

//Delete a user
router.post("/deleteUser", Authenticate, UserController.destroy);
//Delete a user
router.post("/reactivateUser", Authenticate, UserController.reActivate);

//Create New admin
router.post("/newAdmin", Authenticate, AdminGenerator.admingenerator);

//Delete an admin
router.post("/deleteAdmin", Authenticate, AdminGenerator.admindelete);

//Categories
router.post("/addCategory",Authenticate, CategoryController.addCategory);
router.post("/deleteCategory",Authenticate, CategoryController.destroy);
router.post("/showCategory",Authenticate, CategoryController.show);
router.get("/showCategories",Authenticate, CategoryController.index);


//SubCategories
router.post("/addSubCategory",Authenticate, CategoryController.addSubCategory);
router.post("/deleteSubCategory",Authenticate, CategoryController.destroySubCategory);
router.post("/showSubCategory",Authenticate, CategoryController.subCategoryShow);
router.get("/showSubCategories",Authenticate, CategoryController.subCategoryIndex);

//Products
router.post("/addProduct", productController.addProduct);
router.post("/deleteProduct", productController.destroy);
router.post("/showProduct", productController.show);
router.get("/showProducts", productController.index);
router.post("/showProductCategory", productController.productCategory);


//Fertilizers
router.get("/showFertilizers", productController.showFertilizer);
router.post("/deleteFertilizer", productController.deleteFertilizer);
router.post("/addFertilizer", productController.addFertilizer);
router.post("/updateFertilizer", productController.updateFertilizer);
router.post("/showFertilizerId", productController.showFertilizerById);
//Machinery
router.get("/showMachinery", machineryController.showMachinery);
router.post("/deleteMachinery", machineryController.deleteMachinery);
router.post("/addMachinery", machineryController.addMachinery);
router.post("/updateMachinery", machineryController.updateMachinery);
router.post("/showMachineryId", machineryController.showMachineryById);
//Seed
router.get("/showSeed", seedController.showSeed);
router.post("/deleteSeed", seedController.deleteSeed);
router.post("/addSeed", seedController.addSeed);
router.post("/updateSeed", seedController.updateSeed);
router.post("/showSeedId", seedController.showSeedById);
//Fruits
router.get("/showFruit", fruitController.showFruit);
router.post("/deleteFruit", fruitController.deleteFruit);
router.post("/addFruit", fruitController.addFruit);
router.post("/updateFruit", fruitController.updateFruit);
router.post("/showFruitId", fruitController.showFruitById);
//Vege
router.get("/showVege", vegeController.showVege);
router.post("/deleteVege", vegeController.deleteVege);
router.post("/addVege", vegeController.addVege);
router.post("/updateVege", vegeController.updateVege);
router.post("/showVegeId", vegeController.showVegeById);
//Grains
router.get("/showGrain", grainController.showGrain);
router.post("/deleteGrain", grainController.deleteGrain);
router.post("/addGrain", grainController.addGrain);
router.post("/updateGrain", grainController.updateGrain);
router.post("/showGrainId", grainController.showGrainById);
//AgriClass
router.get("/showAgriClass", agriClassController.showAgriClass);
router.post("/deleteAgriClass", agriClassController.deleteAgriClass);
router.post("/addAgriClass", agriClassController.addAgriClass);
router.post("/updateAgriClass", agriClassController.updateAgriClass);
//news
router.get("/showNews", newsController.showNews);
router.post("/deleteNews", newsController.deleteNews);
router.post("/addNews", newsController.addNews);
router.post("/updateNews", newsController.updateNews);
//cart
router.post("/showCart", cartController.showCart);
router.post("/deleteCart", cartController.deleteCart);
router.post("/getcartdata", cartController.getCart);
router.post("/addCart", cartController.addCart);
router.post("/updateCart", cartController.updateCart);
router.post("/increasequantity", cartController.updateQuantity);
router.post("/removequantity", cartController.removeQuantity);

module.exports = router;
