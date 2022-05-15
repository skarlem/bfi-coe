

module.exports = function makeAddNewCoeRequestsUseCase( CoeSchemaModel ) {

  return async function addRequest() {
      try {
        const {accessSpreadSheet} = require('../../../google-sheet-worker/index')
        const spreadsheetData = await accessSpreadSheet();
       
        const filteredArray = [];
        const data = await CoeSchemaModel.find();
        // const data =  query.collection(CoeSchemaModel.collection)
        console.log('excel data',spreadsheetData)
        console.log('db data',data)
        // spreadsheetData.push(data)
        for(let i =0; i<spreadsheetData.length; i++){
            for(let j =0; j <data.length; j++){
                console.log('sheet timestamp',spreadsheetData[i].timestamp)
                console.log('db timestamp',data[j].timestamp)
                if(spreadsheetData[i].timestamp == data[j].timestamp){
                    spreadsheetData.splice(i,1);
                    // console.log((spreadsheetData[i]))
                    // filteredArray.push(spreadsheetData[i]);
                }
            }
        }
        // spreadsheetData.uuid = uuid();
        const insert = await CoeSchemaModel.create(spreadsheetData);
          return insert;
      } catch (error) {
          console.log(error)
      }

    };
  };
  