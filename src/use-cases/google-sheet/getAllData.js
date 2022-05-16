module.exports = function makeFetchAllData({sheetDb}) {
    return async function getData() {
      
      
    //   console.log(todoListDb);
      const result = await sheetDb.fetchSheetData();
  

      if (result.length < 1) {
        return { message: "No todos found." };
      }
  
      const data = {
        message: "Successfull..",
        todoList: result
      };
      // console.log(data);
  
      return data;
    };
  };
  