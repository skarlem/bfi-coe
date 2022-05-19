

//Use Cases
const { 
    getListOfCoeRequestUseCase,
    addNewCoeRequestUseCase,
    updateRequestUseCase
  } = require("../../use-cases/coeRequests/index");
  
  
  
  const makeListOfCoeRequest = require('./getAllData');
  const  makeAddNewCoeRequest = require('./addNewRequest');
  const makeUpdateRequest = require('./updateRequests');
  
  // const {redis_client} = require('../../../data-access/redis/index');
  
    const getAllCoeRequestController = makeListOfCoeRequest({getListOfCoeRequestUseCase});
    const addNewCoeRequestController = makeAddNewCoeRequest({addNewCoeRequestUseCase});
    const updateRequestsController= makeUpdateRequest({updateRequestUseCase});

    module.exports = {
        getAllCoeRequestController,
        addNewCoeRequestController,
        updateRequestsController
    };
  
  
    
   
    