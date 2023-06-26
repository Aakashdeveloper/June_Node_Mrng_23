let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config();
let mongo = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT;
let {dbConnect,getData,getDataSort,getDataSortLimit,
    postData} = require('./Controller/dbController');


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

//restaurants details
app.get('/details/:id', async(req,res) => {
    //let id = Number(req.params.id);
    //let query = {restaurant_id:id};
    let _id = mongo.ObjectId(req.params.id);
    let query = {_id}
    let output = await getData("restaurants",query)
    res.send(output)
})

//menu details
app.get('/menu/:id',async(req,res)=>{
    let id = Number(req.params.id);
    let query = {restaurant_id:id};
    let output = await getData("menu",query)
    res.send(output)
})


//meny details {"id":[4,3,5]}
app.post('/menuDetails',async(req,res)=>{
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}};
        let collection = 'menu';
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Please pass data as array like {"id":[4,3,5]}')
    }
})

//placeorder
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = 'orders';
    let response = await postData(collection,data)
    res.send(response)
})


//orders
app.get('/orders',async(req,res) => {
    let query = {};
    if(req.query.email){
        query={email:req.query.email}
    }
    let collection = 'orders';
    let output = await getData(collection,query)
    res.send(output)
})

app.listen(port,() => {
    dbConnect()
    console.log(`Listing to port ${port}`)
})