const CoeSchemaModel = require("../../data-access/models/coeRequestsModel");

require("../../data-access/coeRequests/index");
const makeListOfCoeRequestsUseCase = require('./getAllRequestUseCase');
const makeAddNewCoeRequestsUseCase = require('./addRequestUseCase');
const makeUpdateRequests = require('./updateRequestUseCase');
const makeListOfSingleCoeRequest = require('./getOneRequestUseCase');
// console.log('asdasdsad',CoeSchemaModel)

const getListOfCoeRequestUseCase = makeListOfCoeRequestsUseCase(CoeSchemaModel);
const addNewCoeRequestUseCase = makeAddNewCoeRequestsUseCase(CoeSchemaModel);
const updateRequestUseCase = makeUpdateRequests(CoeSchemaModel);
const getOneRequestUseCase = makeListOfSingleCoeRequest(CoeSchemaModel);



module.exports = {
    getListOfCoeRequestUseCase,
    addNewCoeRequestUseCase,
    updateRequestUseCase,
    getOneRequestUseCase
}