
module.exports = function makeListOfSingleCoeRequest( CoeSchemaModel ) {

    return async function getOneRequest(info) {
        
    //   const {accessSpreadSheet} = require('../../../google-sheet-worker/index')
    //   const res = await accessSpreadSheet();
      
    //   c
  
      const data = CoeSchemaModel.findOne({info});
        // console.log('here',Dataresult)
        return data;
      };
    };
    