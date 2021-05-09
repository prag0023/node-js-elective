const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"; // it should be from the databse
const dbName= "beers";

MongoClient.connect(url,(error, clinet)=>{
    if(error){
        throw new Error(error);
    }

    const db = client.db(dbName);
    const breweries = db.collection("breweries");

    breweries.find().toArray((error, data) => {
       if(error){
           throw new Error(error);
       }
       console.log(data);
       client.close();

    });
});