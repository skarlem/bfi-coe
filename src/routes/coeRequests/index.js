const express = require("express");
const router = express.Router();


// src\controllers\coeRequests\index.js

const { 
    getAllCoeRequestController ,
    addNewCoeRequestController
} = require("../../controllers/coeRequests/index");


// console.log('asdasdadsad',getAllCoeRequestController);


const makeExpressCallback = require("../../express-callback/index");

router.get("/", makeExpressCallback(addNewCoeRequestController));
// router.get("/", makeExpressCallback(getAllCoeRequestController));
router.post("/", makeExpressCallback(addNewCoeRequestController));
// router.post(  "/", makeExpressCallback(addTodosController));
// router.patch( "/update/:id", makeExpressCallback(updateTodosController));
module.exports = router;

