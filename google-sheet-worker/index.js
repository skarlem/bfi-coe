
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
const doc = new GoogleSpreadsheet('1-RK2h1XiSebikI5FFCO_z3BHDd8NeKrLmoTpRqXtCVg');

// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
await doc.useServiceAccountAuth(creds);

await doc.loadInfo(); // loads document properties and worksheets
let result = [];

let sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
// console.log(doc.rowCOunt)
await sheet.getRows({offset:0}).then( res =>{
  // console.log('res',res)
  for(let rowData of res){
    result.push({
      uuid: uuid.v4(),
      timestamp: rowData['Timestamp'],
      employee_name: rowData['Employee Name'],
      employee_id_number: rowData['Employee ID Number'],
      business_establishment: rowData['Business Establishment'],
      place_of_assignment: rowData['Employee Department'],
      employee_position: rowData['Employee Position'],
      purpose_of_request: rowData['Purpose of Request'],
      employee_status: rowData['Status of Employee'],
      resume: rowData['Title']
    })
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


module.exports = { accessSpreadSheet };
