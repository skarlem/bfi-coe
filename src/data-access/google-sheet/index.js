const {pool} =require('../config/index');


const googleSheetQuery  = require('./google-sheet.js');

const sheetDb = googleSheetQuery({pool});

console.log('asdasd',sheetDb);
module.exports = {
    sheetDb
};