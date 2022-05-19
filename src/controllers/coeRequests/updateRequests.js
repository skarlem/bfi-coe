 


  module.exports = function makeUpdateRequest({  updateRequestUseCase }) {
    return async function updateRequest(httpRequest) {
      try {
        //   // console.log(httpRequest);        
        //   const SessionId = httpRequest.SessionId;
        // if (!SessionId) {
        //   throw { status: 403, message: "Forbidden." };
        // }
        
        const requestInfo = httpRequest.body
        const result = await updateRequestUseCase(requestInfo);
        // result = {
        //     res :'this is a sample result',
        //     res2:'make the actual use case later'
        // }
        
        //   result = await listOfBanks(SessionId, company);
      
    
        
        // console.log('asdsda',result);
        return {
          headers: {
            "Content-Type": "application/json"
          },
          status: 200,
          body: result
        };
      } catch (e) {
       
        console.log(e);
        return {
          headers: {
            "Content-Type": "application/json"
          },
          status: e.status ? e.status : 400,
          body: { errorMsg: e.message }
        };
      }
    };
  };