// const { request } = require("express");
const CoeSchemaModel = require("../models/coeRequestsModel")

module.exports.addNewRequest = (info,callback) => {
    CoeSchemaModel.create(info,callback)
}

module.exports.getRequests = (callback, limit) => {
	CoeSchemaModel.find(callback).limit(limit);
}
//    const coeRequestDB {
//        Object.freeze({
//         getAllRequests,
//         addNewRequest
//        })
//    }
//    getAllRequests = (callback, limit) => {
//     CoeSchemaModel.find(callback).limit(limit);

//     }
//     addNewRequest = (info,callback) => {
//         CoeSchemaModel.create(info,callback)
//     }

    // module.exports = function coeRequestDB({
    //     CoeSchemaModel
    //   }) {
    //     return Object.freeze({
    //         getAllRequests,
    //         addNewRequest,
    //         test
    //         // updateTodos
    //     });
    //     async function getAllRequests(callback, limit) {
    //         CoeSchemaModel.find(callback).limit(limit);
        
    //         }

    //     async function addNewRequest (info,callback){
    //             CoeSchemaModel.create(info,callback)
    //     }
    //     async function test(){
    //         // CoeSchemaModel.create(info,callback)
    //         return 'test'
    // }
    
       

    
//    module.exports = {coeRequestDB} 
    
  

