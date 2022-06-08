const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();

const SuperadminRoute = require("./routes/superadmincontrols");
const UserRoute = require("./routes/userRoute");
const Authroute = require("./routes/authentication");

//images



mongoose.connect("mongodb+srv://abysonmathew:Abyson123@cluster0.4rql7jo.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established");
});

const app = express();

app.use(
  cors({
    orgin: "*",
  })
);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  fileUpload({
    createParentPath: true,
  })
);
//images
app.use(express.static("H:/org_project/Agro_factory/Node-basic/routes/images/"));

app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use('/Controllers/Images', express.static('Controllers/Images'));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.use("/api", Authroute);
app.use("/superadmin", SuperadminRoute);
app.use("/user", UserRoute);

