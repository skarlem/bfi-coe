const CoeSchemaModel = require("../../data-access/models/coeRequestsModel");

require("../../data-access/coeRequests/index");
const makeListOfCoeRequestsUseCase = require('./getAllRequestUseCase');
const makeAddNewCoeRequestsUseCase = require('./addRequestUseCase');
const makeUpdateRequests = require('./updateRequestUseCase');

// console.log('asdasdsad',CoeSchemaModel)

const getListOfCoeRequestUseCase = makeListOfCoeRequestsUseCase(CoeSchemaModel);
const addNewCoeRequestUseCase = makeAddNewCoeRequestsUseCase(CoeSchemaModel);
const updateRequestUseCase = makeUpdateRequests(CoeSchemaModel);



module.exports = {
    getListOfCoeRequestUseCase,
    addNewCoeRequestUseCase,
    updateRequestUseCase
}