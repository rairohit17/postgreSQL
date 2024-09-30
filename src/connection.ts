import pkg from "pg";
const { Client}= pkg;

// import { Client } from "pg"

  const connectionString : string= "postgresql://postgres:rohitrai321@localhost:5432/test"
export const newClient=new Client({
    connectionString:connectionString
})

export async function connectingToPsql(){
    newClient.connect().then(()=>{
        console.log("connected to db")
    }).catch((err)=> {
        console.log(err.message)
    })
}
// connectingToPsql()