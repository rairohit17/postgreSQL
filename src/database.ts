import { connectingToPsql } from "./connection.js";
// import { newClient } from "./connection.js";
import { creatingTableUsers } from "./creatingTable.js";
import { insertingData } from "./insertData.js";
import { sortingdate } from "./sortingByName.js";
import { singleInsertion } from "./sqlInjection.js";
 const connection= await connectingToPsql();
// creatingTableUsers();
// insertingData();
// sortingdate();
 const insertion = await singleInsertion()