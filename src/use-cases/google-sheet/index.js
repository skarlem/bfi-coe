const {sheetDb} = require("../../data-access/google-sheet/index");


const makeFetchAllData = require('./getAllData');


const getSheetDataUseCase = makeFetchAllData({sheetDb});


module.exports = {
    getSheetDataUseCase,
    
}