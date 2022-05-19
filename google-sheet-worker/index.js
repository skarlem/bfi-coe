
require('dotenv').config();

const { GoogleSpreadsheet } = require('google-spreadsheet'),
    //   { client_email, private_key } = require('../api-key.json'),spreadsheetId = process.env.SSW,
  moment = require('moment');
// const { clouddebugger } = require('googleapis/build/src/apis/clouddebugger');
const { v4: uuidv4 } = require('uuid');
const creds = require('../api-key.json');
// const { GoogleSpreadsheet } = require('google-spreadsheet');
// const { v4: uuidv4 } = require('uuid');
const accessSpreadSheet = async () => {
  try {
   
// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(`${process.env.SSW}`);
let currentDate = moment().format('D/M/YYYY'); 
// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth(creds);

await doc.loadInfo(); // loads document properties and worksheets
let result = [];

let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
// console.log(doc.rowCOunt)
console.log(currentDate)
// await sheet.loadCells('A1:Q3');
// // console.log(sheet.cellStats); 
// const cellA1 = sheet.getCell(0, 0);
// const cellC3 = sheet.getCellByA1('Q3');
// // cellA1.note = 'This is cell A1';
// // cellA1.value = 123.45;
// // cellA1.textFormat = { bold: true };
// // cellC3.formula = '=A1';
// console.log(cellC3.value); // this will throw an error
// await sheet.saveUpdatedCells(); // saves both cells in one API call
// console.log(cellC3.value); // 123.45
await sheet.getRows({offset:0}).then( res =>{
  // console.log('res',res.rowMetaData)
  for(let rowData of res){
    console.log('asdasdasdasd',rowData)
    // console.log(rowData['Timestamp'].split(" ")[0])
    // if(currentDate == rowData['Timestamp'].split(" ")[0]){
      // console.log('asdasd')
      result.push({
        uuid: uuidv4(),
        timestamp: rowData['Timestamp'],
        employee_name: rowData['Employee Name'],
        employee_id_number: rowData['Employee ID Number'],
        business_establishment: rowData['Business Establishment'],
        place_of_assignment: rowData['Employee Department'],
        employee_position: rowData['Employee Position'],
        purpose_of_request: rowData['Purpose of Request'],
        issued_date:rowData['Issued Date'],
        // employee_status: rowData['Status of Employee'],
        resume: rowData['Title'],
        printed: rowData['Printed'],
        signed: rowData['Signed'],
        issued: rowData['Issued'],
        rowNum: rowData.rowNumber
      })
    // }
   
  }
}) 
return result;
    // console.log(result);

  } catch (error) {
    console.log(error)
  }
};
const addValidationLink = async (info) => {
  try {
   
// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(`${process.env.SSW}`);
// let currentDate = moment().format('D/M/YYYY'); 
// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth(creds);

await doc.loadInfo(); // loads document properties and worksheets
let result = [];

let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
console.log('infooooooo',info)
// console.log(doc.rowCOunt)
for(let i =0;i<info.length; i++){
  let range = `A1:Q${info[i].rowNum}`;
  let cell = `Q${info[i].rowNum}`;
  console.log('range',range);
  console.log('cell',cell)
  await sheet.loadCells(range);
  // console.log(sheet.cellStats); 
  const cellA1 = sheet.getCell(0, 0);
  const cellC3 = sheet.getCellByA1(cell);
  // cellA1.note = 'This is cell A1';
  cellC3.value = info[i].uuid;
  // cellA1.textFormat = { bold: true };
  // cellC3.formula = '=A1';
   // this will throw an error
  await sheet.saveUpdatedCells();
  console.log(cellC3.value);
}
// console.log(currentDate)
 // saves both cells in one API call


  } catch (error) {
    console.log(error)
  }
};

const fetchForUpdate = async () => {
  try {
   
// Initialize the sheet - doc ID is the long id in the sheets URL
const doc = new GoogleSpreadsheet(`${process.env.SSW}`);
let currentDate = moment().format('D/M/YYYY'); 
// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth(creds);

await doc.loadInfo(); // loads document properties and worksheets
let result = [];

let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
// console.log(doc.rowCOunt)
console.log(currentDate)
/
await sheet.getRows({offset:0}).then( res =>{
  // console.log('res',res.rowMetaData)
  for(let rowData of res){
    console.log('asdasdasdasd',rowData)
    // console.log(rowData['Timestamp'].split(" ")[0])
    // if(currentDate == rowData['Timestamp'].split(" ")[0]){
      // console.log('asdasd')
      result.push({
        validation_link: rowData['Validation Link'],
        timestamp: rowData['Timestamp'],
        employee_name: rowData['Employee Name'],
        employee_id_number: rowData['Employee ID Number'],
        business_establishment: rowData['Business Establishment'],
        place_of_assignment: rowData['Employee Department'],
        employee_position: rowData['Employee Position'],
        purpose_of_request: rowData['Purpose of Request'],
        // employee_status: rowData['Status of Employee'],
        resume: rowData['Title'],
        printed: rowData['Printed'],
        signed: rowData['Signed'],
        issued: rowData['Issued'],
        rowNum: rowData.rowNumber
      })
    // }
   
  }
}) 
return result;
    // console.log(result);

  } catch (error) {
    console.log(error)
  }
};

// (async function() {
// await accessSpreadSheet();
// }());


module.exports = { accessSpreadSheet,addValidationLink,fetchForUpdate };
