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


db.restaurants.find({cost:$lt:500},{restaurant_name:1,cost:1})

db.restaurants.find({cost:$gt:500},{restaurant_name:1,cost:1})


db.restaurants.find({cost:{$gt:500,$lt:1000}},{restaurant_name:1,cost:1})

db.restaurants.find({state_id:1}).sort({restaurant_name:1})

db.restaurants.find({state_id:1}).sort({restaurant_name:-1})

//first 2 records
db.restaurants.find({state_id:1}).sort({restaurant_name:1}).limit(2)


db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(2).limit(2)


db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(0).limit(10)
db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(10).limit(10)
db.restaurants.find({state_id:1}).sort({restaurant_name:1}).skip(20).limit(10)