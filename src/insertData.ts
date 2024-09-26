import { newClient } from "./connection.js";
import fs from "fs/promises"
 
export async function insertingData() {
    try{
        const data : string = await  fs.readFile("./users.sql",'utf-8' )
    newClient.query(data).then((data)=>{
        console.log("data insertion successful")
    }).catch((err)=>{
        console.log("ERROR OCCURED : " +err.message)
    })
    }
    catch(err: any){
        console.log("error occured : " + err.message)
    }
    
}

