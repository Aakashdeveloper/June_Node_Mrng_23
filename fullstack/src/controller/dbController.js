let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.mongoUrl;
let db;

function dbConnect(){
    MongoClient.connect(mongoUrl,{useNewUrlParser:true},(err,client) => {
        if(err) console.log(`Error while connecting to Mongo`);
        db = client.db('junemrng')
    })
}


async function getData(colName,query){
    return await db.collection(colName).find(query).toArray()
}

module.exports = {
    dbConnect,
    getData
}