const { request } = require("express");

module.exports = function todosQuery({
    pool
  }) {
    return Object.freeze({
        fetchSheetData,
       
    });
  
    async function fetchSheetData() {
    
        const result = await new Promise((resolve) => {
            let sql =`SELECT * FROM todos`;
           
            pool.query(sql, (err, res) => {
           
              if (err) resolve(err);
              resolve(res);
            });
          });
        //   pool.end(); 
          console.log(`asdasd`,result);
          return result.rows;

    }


    async function addTodos(requestInfo) {
        console.log(requestInfo);
        try{
          const result = await new Promise((resolve) => {
              let sql =`INSERT INTO todos(description,user_id) VALUES('${requestInfo.description}','${requestInfo.user_id}')`;
             console.log(sql);
              pool.query(sql, (err, res) => {
             
                if (err) resolve(err);
                resolve(res);
              });
            });
          //   pool.end(); 
            // console.log(`asdasd`,result);
            return result;
          } catch (e) {
            console.log("Error: ", e);
          }
          
      }

      

  
}
