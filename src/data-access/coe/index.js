const CoeSchemaModel = require("../models/coeRequestsModel");

const coeRequestsQuery = require("./coeRequests");

const coeRequestDB = coeRequestsQuery({CoeSchemaModel});

module.exports = {
  coeRequestDB
}