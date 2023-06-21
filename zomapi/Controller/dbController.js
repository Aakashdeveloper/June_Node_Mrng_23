let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MongoUrl;
let db;

function dbConnect(){
    MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client) => {
        if(err) console.log(`Error While Connecting`);
        db = client.db('internfeb')
    });
}

async function getData(colName,query){
    let output;
    try{
        output = await db.collection(colName).find(query).toArray();
    } catch(err){
        output = {"Error":`Error While fetching from ${colName}`};
    }
    return output
}


module.exports = {
    dbConnect,
    getData
}