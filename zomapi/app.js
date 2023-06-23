let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT;
let {dbConnect,getData,getDataSort,getDataSortLimit} = require('./Controller/dbController');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

//get heart beat
app.get('/',(req,res) => {
    res.status(200).send('Health Ok')
})

// list of city
app.get('/location', async(req,res) => {
    let query = {};
    let collection = "location";
    let output = await getData(collection,query);
    res.send(output);
})

// list of restaurants
app.get('/restaurants',async(req,res) => {
    let query = {};
    let stateId = Number(req.query.stateId);
    let mealId = Number(req.query.mealId);
    if(mealId && stateId){
        query={
            "mealTypes.mealtype_id":mealId,
            state_id:stateId
        }
    }
    else if(mealId){
        query={
            "mealTypes.mealtype_id":mealId
        }
    }
    else if(stateId){
        query = {
            state_id:stateId
        }
    }
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output);
})

// list of Meal
app.get('/mealType', async(req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query);
    res.send(output);
})


//filters
app.get('/filters/:mealId',async(req,res) => {
    let query = {};
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let sort = {cost:1};
    let skip = 0;
    let limit = 1000000000;
    if(req.query.skip && req.query.limit){
        skip = Number(req.query.skip);
        limit = Number(req.query.limit)
    }
    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(cuisineId){
        query={
            "mealTypes.mealtype_id":mealId,
            "cuisines.cuisine_id":cuisineId
        }
    }else if(lcost && hcost){
        query={
            "mealTypes.mealtype_id":mealId,
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    let collection = "restaurants";
    let output = await getDataSortLimit(collection,query,sort,skip,limit);
    res.send(output);
})

app.listen(port,() => {
    dbConnect()
    console.log(`Listing to port ${port}`)
})