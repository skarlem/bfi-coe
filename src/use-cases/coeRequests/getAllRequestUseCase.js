
module.exports = function makeListOfCoeRequestsUseCase( CoeSchemaModel ) {

  return async function getRequest() {
      
    const {accessSpreadSheet} = require('../../../google-sheet-worker/index')
    const res = await accessSpreadSheet();
    // console.log('res',res);
      // console.log(res)
      // const result = await coeRequestDB.getAllRequests();
      // Coe.getRequests((err,result)=>{
      // })
      // let Dataresult =[];
      // let message;
      //  await CoeSchemaModel.getAllRequests((err,result)=>{
      //    console.log(result)
      //    Dataresult.push(result);
      //   // console.log(result)
      //   // // console.log(result)
      //   //   if (result.length < 1) {
      //   //       message=  "No request/s found.";
      //   //   }else{
      //   //     Dataresult = {
      //   //       message: "Successfull..", 
      //   //       coeRequestList: result
      //   //     };
      //   //   }
           
      // });
 
 
 
 
      //  console.log('dataresult',Dataresult)
    const data = CoeSchemaModel.find({});
      // console.log('here',Dataresult)
      return data;
    };
  };
  