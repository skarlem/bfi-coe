const { clouddebugger } = require('googleapis/build/src/apis/clouddebugger');


module.exports = function makeUpdateRequests( CoeSchemaModel ) {

  return async function updateRequest() {
      try {
        const {accessSpreadSheet,fetchForUpdate} = require('../../../google-sheet-worker/index')
        const spreadsheetData = await fetchForUpdate();
       
        
        const data = await CoeSchemaModel.find();
      
       
      let updateStatus =[];
        for(let j =0; j <data.length; j++){
         
          for(let i=0; i<spreadsheetData.length; i++){
            
            let filter = { uuid: spreadsheetData[i].validation_link };
            let update = { 
                printed: spreadsheetData[i].printed,
                signed: spreadsheetData[i].signed,
                issued: spreadsheetData[i].issued
            };
            if(spreadsheetData[i].hasOwnProperty('validation_link')){
                if(spreadsheetData[i].validation_link === data[j].uuid){
                    let doc = await CoeSchemaModel.findOneAndUpdate(filter, update);
                    updateStatus.push({
                        uuid : spreadsheetData[i].validation_link,
                       update
                    })
                    console.log({
                        uuid : spreadsheetData[i].validation_link,
                        printed :doc.printed,
                        signed: doc.signed,
                        issued:doc.issued
                    })
                console.log('asdasdasdasd');
                
                } 
            }
          
          }
        }
       
        // console.log(data)
        // spreadsheetData.uuid = uuid();
        // console.log('sheet data',spreadsheetData)
       
          return updateStatus;
      } catch (error) {
          console.log(error)
      }

    };
  };
  