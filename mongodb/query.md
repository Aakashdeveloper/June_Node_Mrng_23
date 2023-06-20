* To see all database
> show dbs

* To go inside database
> use databasename

* To see all collections
> show collections

* To see record inside collection( Find query )
> db.collection.find()
db.users.find()
db.users.find().pretty()


* To Create new database
> use databasename

* Insert data
db.users.insert({"name":"Rohit","city":"Delhi"})

* find with condition
db.products.find({"Color": "White"})

db.products.find({"Color": "White","category" : "Fashion"})

//projection

db.products.find({condition},{Projection})

db.products.find({"Color": "White","category" : "Fashion"},{"product_name":1,"Price":1}).pretty()

db.products.find({Color: "White","category" : "Fashion"},{"product_name":1,"Price":1,"_id":0}).pretty()

_id
> primary key
> Always unique
> 12 byte size
Random number+ series+ date

db.users.insert({"name":"Nikita","city":"Paris","subject":"Ui"})
db.users.insert({"_id":1,"name":"Amit","city":"Mumbai"})

db.users.insert({"_id":2,"name":"Kritika","city":"Amsterdam"})

db.restaurants.find({"mealTypes.mealtype_id":1},{restaurant_name:1,mealTypes:1})


db.restaurants.find({"mealTypes.mealtype_id":{$in:[1,3,5]}},{restaurant_name:1,mealTypes:1})


db.restaurants.find({cost:{$lt:500}},{restaurant_name:1,cost:1})

db.restaurants.find({cost:{$gt:500}},{restaurant_name:1,cost:1})


db.restaurants.find({cost:{$gt:500,$lt:1000}},{restaurant_name:1,cost:1})

db.restaurants.find({state_id:1},{restaurant_name:1}).sort({restaurant_name:1})

db.restaurants.find({state_id:1},{restaurant_name:1}).sort({restaurant_name:-1})

//first 2 records
db.restaurants.find({state_id:1},{restaurant_name:1}).sort({restaurant_name:1}).limit(2)


db.restaurants.find({state_id:1},{restaurant_name:1}).sort({restaurant_name:1}).skip(2).limit(2).pretty()


db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(0).limit(10)
db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(10).limit(10)
db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(20).limit(10)


////////Aggregartion
$match
> It is used for filtrting document (condition as like in find)
$project
> It will select some specifi fields from a collection
$group
> it is used to group document on based on some values
$sort
> Its is used to sort the data
$skip
> Skip number of documents 
$limit
> To retrive number of documents
$unwind
> Deconstructs an array, like flat the array
$out
> Is to write the document output

Accumulators
Sum
Count
Avg
Min
Max
first 
Last


db.students.aggregate([
    {
        $match:{sec:'A'}
    },
    {
        $count:'Total Number of students in sec A'
    }
])

{ "Total Number of students in sec A" : 4 }

////////////
db.students.aggregate([
    {
        $group:{
            _id:"$sec",
            total_st:{$sum:1},
            max_age:{$max:"$age"}
        }
    }
])

{ "_id" : "B", "total_st" : 3, "max_age" : 40 }
{ "_id" : "A", "total_st" : 4, "max_age" : 37 }


///////
db.students.aggregate([
    {
        $match:{age:{$gt:30}}
    }
])


db.orders.insert([
   { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
   { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
   { "_id" : 3  }
])

db.inventory.insert([
   { "_id" : 1, "sku" : "almonds", description: "product 1", "instock" : 120 },
   { "_id" : 2, "sku" : "bread", description: "product 2", "instock" : 80 },
   { "_id" : 3, "sku" : "cashews", description: "product 3", "instock" : 60 },
   { "_id" : 4, "sku" : "pecans", description: "product 4", "instock" : 70 },
   { "_id" : 5, "sku": null, description: "Incomplete" },
   { "_id" : 6 }
])


db.orders.aggregate([
    {
        $lookup:
        {
            from:'inventory',
            localField:'item',
            foreignField:'sku',
            as:"combine_data"
        }
    }
])

db.classes.insert( [ 
    { _id: 1, title: "Reading is ...", enrollmentlist: [ "giraffe2", "pandabear", "artie" ], days: ["M", "W", "F"] }, 
    { _id: 2, title: "But Writing ...", enrollmentlist: [ "giraffe1", "artie" ], days: ["T", "F"] } ])

db.members.insert( [
     { _id: 1, name: "artie", joined: new Date("2016-05-01"), status: "A" }, 
     { _id: 2, name: "giraffe", joined: new Date("2017-05-01"), status: "D" }, 
     { _id: 3, name: "giraffe1", joined: new Date("2017-10-01"), status: "A" }, 
     { _id: 4, name: "panda", joined: new Date("2018-10-11"), status: "A" }, 
     { _id: 5, name: "pandabear", joined: new Date("2018-12-01"), status: "A" }, 
     { _id: 6, name: "giraffe2", joined: new Date("2018-12-01"), status: "D" } 
])


db.classes.aggregate([
    {
        $lookup:
        {
            from:"members",
            localField:'enrollmentlist',
            foreignField:"name",
            as:"student_info"
        }
    }
])


db.restaurants.find( { $and: [ { location_id: 1 }, { state_id: 1 }]},{restaurant_name:1,location_id:1,state_id:1,_id:0} )

db.restaurants.find( { $or: [ { location_id: 1 }, { state_id: 1 } ] },{restaurant_name:1,location_id:1,state_id:1,_id:0} ).pretty()