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