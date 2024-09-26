import { connectingToPsql, newClient } from "./connection.js";
// const connection = await connectingToPsql();

export async function  singleInsertion(){
    const values : string[]= ['rohit','india' ]
    const query : string = `INSERT INTO learning (name,country) VALUES ( $1,$2)`
    newClient.query( query,values).then(()=>console.log("insertion successful")).catch((err)=>{
        console.log(err.message)
    })


}


// singleInsertion();