

//Use Cases
const { 
    getListOfCoeRequestUseCase,
    addNewCoeRequestUseCase,
    updateRequestUseCase,
    getOneRequestUseCase
  } = require("../../use-cases/coeRequests/index");
  
  
  
  const makeListOfCoeRequest = require('./getAllData');
  const  makeAddNewCoeRequest = require('./addNewRequest');
  const makeUpdateRequest = require('./updateRequests');
  const makeGetSingleCoeRequest = require('./getSingleRequest');
  // const {redis_client} = require('../../../data-access/redis/index');
  
    const getAllCoeRequestController = makeListOfCoeRequest({getListOfCoeRequestUseCase});
    const addNewCoeRequestController = makeAddNewCoeRequest({addNewCoeRequestUseCase});
    const updateRequestsController= makeUpdateRequest({updateRequestUseCase});
    const getSingleRequestController = makeGetSingleCoeRequest({getOneRequestUseCase});
    module.exports = {
        getAllCoeRequestController,
        addNewCoeRequestController,
        updateRequestsController,
        getSingleRequestController

    };
  
  
    
   
    