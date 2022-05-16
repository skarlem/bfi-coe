const { request } = require("express");

module.exports = function coeQuery({
    pool
  }) {
    return Object.freeze({
        // getAllTodos,
        addNewCoeRequest,
        // updateTodos
    });
  
    async function getAllTodos() {
      try{
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
        } catch (e) {
          console.log("Error: ", e);
        }
        
    }


    async function addNewCoeRequest(requestInfo) {
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

      async function updateTodos(requestInfo,id) {

        console.log(id);
        console.log(requestInfo);
        try{
          const result = await new Promise((resolve) => {
              let sql =`UPDATE todos SET description = '${requestInfo.description}', status=${requestInfo.status} where id = ${id}`;
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
