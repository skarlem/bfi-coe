const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
moment = require('moment');
mongoose.connect('mongodb://bfifarms:Superpw64@95.111.200.10:27017/ecoe');
let db = mongoose.connection;

// const compression = require("compression");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


require("dotenv").config();


app.get("/", (req, res, next) => {
  res.send("api hit")
})


app.use("/coe",require("./routes/coeRequests"))

var port = process.env.APP_PORT || 4000;
app.listen(port, console.log(`Server started at port ${port}`));
