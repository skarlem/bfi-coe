const mongoose = require('mongoose')
Coe = require('./coeModel');
moment = require('moment');
mongoose.connect('mongodb://bfifarms:Superpw64@95.111.200.10:27017/ecoe');
let db = mongoose.connection;


const { accessSpreadSheet } = require("./index");

async function getAllRequests(){
    let data
    await Coe.getRequests((err,result)=>{
        data = result
    })
    return data;
}

async function getDataFromSHeet(){
    const sheetRequests = await accessSpreadSheet();

    // currentDate = moment().format('M/D/YYYY');

   let data= [];
   console.log(data)
   await Coe.getRequests((err,result)=>{
       console.log(result.timestamp)
       if(result.length>0){
        let getAllRequestData = [];
            for(i=0; i<result.length; i++){
                for(j =0;j<sheetRequests.length; j++){
                    // console.log(sheetRequests[j])
                    if(result[i].timestamp!=sheetRequests[j].timestamp){

                        console.log('first timestamp',result[i].timestamp)
                        console.log('2nd timestamp',sheetRequests[j].timestamp);
                        console.log('asdasdasdasd')
                        
                        getAllRequestData.push(sheetRequests[j]);
                    }
                }
        }
        let unique = [...new Set(getAllRequestData)];
        data.push(unique)
        console.log('length of unique array',unique.length)
        // console.log('data after get data from db',unique)
       }
       
      
    // getAllRequestData.push(result)
     
   if(data.length===0){
     
    console.log('asdasd');
    console.log(data)
            // data.push(sheetRequests)
            // Coe.addNewRequest(sheetRequests, (err, result) => {
            //     console.log('data during if empty db',sheetRequests)
            //     if(err){
            //         throw err;
            //     }
            //     console.log('sucesss')
            //     // res.json(book);
            // });
            // return 'sucess';
       }else{
           console.log('okay diri nagadto')
           console.log(data)
        //    await addRequest(data);
         Coe.addNewRequest(data, (err, result) => {
            console.log('data during insert',data)
            if(err){
                throw err;
            }
            console.log('sucesss')
            // res.json(book);
        });
        return 'sucess';
       }
       
    });

    // console.log('data length',data.length)
   

    
}
async function addRequest(info){
     await Coe.addNewRequest(info, (err, result) => {
            console.log('data during insert',data)
            if(err){
                throw err;
            }
            console.log('sucesss')
            // res.json(book);
        });
}
getDataFromSHeet();

// console.log(getAllRequests())
// let data = await getDataFromSHeet()



