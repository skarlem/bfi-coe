const { clouddebugger } = require('googleapis/build/src/apis/clouddebugger');


module.exports = function makeAddNewCoeRequestsUseCase( CoeSchemaModel ) {

  return async function addRequest() {
      try {
        const {accessSpreadSheet,addValidationLink} = require('../../../google-sheet-worker/index')
        const spreadsheetData = await accessSpreadSheet();
       
        
        const data = await CoeSchemaModel.find();
        const filteredArray = [];
      // console.log(spreadsheetData)
        // console.log('db data',data[2])
       
        let counter =0;
       
        // console.log(spreadsheetData)
        for(let j =0; j <data.length; j++){
          // console.log('number of j ',j)
          for(let i=0; i<spreadsheetData.length; i++){
            console.log(spreadsheetData[i].timestamp)
            console.log(data[j].timestamp)
            if(spreadsheetData[i].timestamp === data[j].timestamp){
              // console.log('QQQQQQQQQQQQQQQQQQQ')
              spreadsheetData.splice(i,1);
              // console.log('number of i ',i)
              // console.log('sheet time', spreadsheetData[i].timestamp)
              // console.log('db data time,',data[j])
            }
            // if(spreadsheetData[i].timestamp == data[j].timestamp){
              
          }
         
        }
        const insert = await CoeSchemaModel.create(spreadsheetData);
        const validate = await addValidationLink(spreadsheetData)
        console.log('sheet data',spreadsheetData)
        // spreadsheetData.uuid = uuid();
        // console.log('sheet data',spreadsheetData)
       
          return insert;
      } catch (error) {
          console.log(error)
      }

    };
  };
  