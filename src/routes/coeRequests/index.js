const express = require("express");
const router = express.Router();


// src\controllers\coeRequests\index.js

const { 
    getAllCoeRequestController ,
    addNewCoeRequestController,
    updateRequestsController,
    getSingleRequestController
} = require("../../controllers/coeRequests/index");


// console.log('asdasdadsad',getAllCoeRequestController);


const makeExpressCallback = require("../../express-callback/index");

// router.get("/", makeExpressCallback(addNewCoeRequestController));
router.get("/fetch/", makeExpressCallback(getAllCoeRequestController));
router.get("/fetch/:id", makeExpressCallback(getSingleRequestController));
router.post("/add/", makeExpressCallback(addNewCoeRequestController));
router.patch("/update/", makeExpressCallback(updateRequestsController));
// router.post(  "/", makeExpressCallback(addTodosController));
// router.patch( "/update/:id", makeExpressCallback(updateTodosController));
module.exports = router;

