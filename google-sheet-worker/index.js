
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
const doc = new GoogleSpreadsheet(`${process.env.PROD_SSW}`);
let currentDate = moment().format('M/D/YYYY'); 
// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth(creds);

await doc.loadInfo(); // loads document properties and worksheets
let result = [];

let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
// console.log(doc.rowCOunt)
// console.log(currentDate)
//
await sheet.getRows({offset:0}).then( res =>{
  // console.log('res',res.rowMetaData)
  for(let rowData of res){
    // console.log('asdasdasdasd',rowData.rowNumber)
    // console.log(rowData.Timestamp)
    // console.log(typeof rowData['Timestamp'])
    if(!(typeof rowData['Timestamp'] ==='undefined' || typeof rowData['Timestamp'] ===null) ){
      if(currentDate == rowData['Timestamp'].split(" ")[0]){
        // console.log('asdasdasdasdas')
        // console.log('asdasd')
        result.push({
          uuid: uuidv4(),
          title_status: rowData['Title Status'],
          type_of_coe : rowData['Type of COE'],
          timestamp: rowData['Timestamp'],
          employee_name: rowData['Employee Name'],
          employee_id_number: rowData['Employee ID Number'],
         
          place_of_assignment: rowData['Employee Department'],
          employee_position: rowData['Employee Position'],
          employee_department: rowData['Employee Department'],
          purpose_of_request: rowData['Purpose of Request'],
          business_establishment: rowData['Business Establishment'],
          contract_start_date: rowData['Contract Start Date'],
          // end_date: rowData['End Date'],
          contract_end_date: rowData['Contract End Date'],
          approver: rowData['Approver'],
          issuance_date: rowData['Issuance Date'],
          document_link: rowData['Document Link'],
          printed_date: rowData['Printed Date'],
          signed_date: rowData['Signed Date'],
          issued_date:rowData['Issued Date'],
          // employee_status: rowData['Status of Employee'],
          resume: rowData['Title'],
          printed: rowData['Printed'],
          signed: rowData['Signed'],
          issued: rowData['Issued'],
          rowNum: rowData.rowNumber
        })
      }
    }
  
   
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
const doc = new GoogleSpreadsheet(`${process.env.PROD_SSW}`);
// let currentDate = moment().format('D/M/YYYY'); 
// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth(creds);

await doc.loadInfo(); // loads document properties and worksheets
let result = [];

let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
// console.log('infooooooo',info)
// console.log(doc.rowCOunt)
for(let i =0;i<info.length; i++){
  let range = `A1:Q${info[i].rowNum}`;
  let cell = `P${info[i].rowNum}`;
  // console.log('range',range);
  // console.log('cell',cell)
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
  // console.log(cellC3.value);
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
const doc = new GoogleSpreadsheet(`${process.env.PROD_SSW}`);
let currentDate = moment().format('M/D/YYYY'); 
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
    if(!(typeof rowData['Timestamp'] ==='undefined' || typeof rowData['Timestamp'] ===null) ){
    if(currentDate == rowData['Timestamp'].split(" ")[0]){
      // console.log('asdasd')
      result.push({
        validation_link: rowData['Validation Link'],
        title_status: rowData['Title Status'],
        type_of_coe : rowData['Type of COE'],
        timestamp: rowData['Timestamp'],
        employee_name: rowData['Employee Name'],
        employee_id_number: rowData['Employee ID Number'],
       
        place_of_assignment: rowData['Employee Department'],
        employee_position: rowData['Employee Position'],
        employee_department: rowData['Employee Department'],
        purpose_of_request: rowData['Purpose of Request'],
        business_establishment: rowData['Business Establishment'],
        contract_start_date: rowData['Contract Start Date'],
        // end_date: rowData['End Date'],
        contract_end_date: rowData['Contract End Date'],
        approver: rowData['Approver'],
        issuance_date: rowData['Issuance Date'],
        document_link: rowData['Document Link'],
        printed_date: rowData['Printed Date'],
        signed_date: rowData['Signed Date'],
        issued_date:rowData['Issued Date'],
        // employee_status: rowData['Status of Employee'],
        resume: rowData['Title'],
        printed: rowData['Printed'],
        signed: rowData['Signed'],
        issued: rowData['Issued'],
        rowNum: rowData.rowNumber
      })
    }
  }
   
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
