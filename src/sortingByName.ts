import { newClient } from "./connection.js";
 export async function sortingdate(){
    newClient.query(` SELECT * from  users ORDER BY created_at`).then((data)=> console.log(data
    )).catch((err)=>{
        console.log(err);
    })
 }