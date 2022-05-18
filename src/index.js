
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
moment = require('moment');
// console.log(process.env.DB)
mongoose.connect(`${process.env.DB}`);
let db = mongoose.connection;

// const compression = require("compression");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());




app.get("/", (req, res, next) => {
  res.send("api hit")
})


app.use("/coe",require("./routes/coeRequests"))

var port = process.env.APP_PORT || 4000;
app.listen(port, console.log(`Server started at port ${port}`));
