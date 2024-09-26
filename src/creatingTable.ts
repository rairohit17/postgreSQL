// import { connectingToPsql } from "./connection";
import { newClient } from "./connection.js";

export async function creatingTableUsers(){
    newClient.query(`CREATE TABLE users(
        username VARCHAR(50) NOT NULL ,
        password VARCHAR(100) NOT NULL,
        id BIGSERIAL PRIMARY KEY ,
        email VARCHAR(100) NOT NULL,
        created_at  DATE NOT NULL)`).then((data)=>{
            console.log("query successful")
        }).catch((err)=>{
            console.log( "ERROR OCCURES : "+err.message)
        })
}