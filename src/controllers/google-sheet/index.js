

//Use Cases
const { 
    getSheetDataUseCase,
    
  } = require("../../use-cases/google-sheet/index");
  
  
  
  const makeFetchAllData = require('./getAllData');

  
  // const {redis_client} = require('../../../data-access/redis/index');
  
    const getSheetDataController = makeFetchAllData({getSheetDataUseCase});
  
    module.exports = {
        getSheetDataController,
     
    };
  
  
    
   
    