

//Use Cases
const { 
    getListOfCoeRequestUseCase,
    addNewCoeRequestUseCase
  } = require("../../use-cases/coeRequests/index");
  
  
  
  const makeListOfCoeRequest = require('./getAllData');
  const  makeAddNewCoeRequest = require('./addNewRequest');
  
  // const {redis_client} = require('../../../data-access/redis/index');
  
    const getAllCoeRequestController = makeListOfCoeRequest({getListOfCoeRequestUseCase});
    const addNewCoeRequestController = makeAddNewCoeRequest({addNewCoeRequestUseCase});

    module.exports = {
        getAllCoeRequestController,
        addNewCoeRequestController
    };
  
  
    
   
    