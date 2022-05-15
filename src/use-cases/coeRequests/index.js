const CoeSchemaModel = require("../../data-access/models/coeRequestsModel");

require("../../data-access/coeRequests/index");
const makeListOfCoeRequestsUseCase = require('./getAllRequestUseCase');
const makeAddNewCoeRequestsUseCase = require('./addRequestUseCase');
console.log('asdasdsad',CoeSchemaModel)

const getListOfCoeRequestUseCase = makeListOfCoeRequestsUseCase(CoeSchemaModel);
const addNewCoeRequestUseCase = makeAddNewCoeRequestsUseCase(CoeSchemaModel);



module.exports = {
    getListOfCoeRequestUseCase,
    addNewCoeRequestUseCase  
}