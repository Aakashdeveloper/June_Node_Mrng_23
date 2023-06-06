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

db.products.find({"Color": "White","category" : "Fashion"},{"product_name":1,"Price":1,"_id":0}).pretty()

_id
> primary key
> Always unique
> 12 byte size
Random number+ series+ date

db.users.insert({"name":"Nikita","city":"Paris","subject":"Ui"})
db.users.insert({"_id":1,"name":"Amit","city":"Mumbai"})

db.users.insert({"_id":2,"name":"Kritika","city":"Amsterdam"})