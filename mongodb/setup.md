// local setup
> https://www.mongodb.com/try/download/community
> download version 5.0.18
(https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-5.0.18-signed.msi)
> Install

# window
In C drive
Create folder by the name of data
Inside data make folder by the name of db

C:/data/db

# mac/linux
> open terminal
> mkdir data/db


//Cloud setup
> https://account.mongodb.com/account/login 
(sign up using google)

> Create
    > Shared
        > aws
            > Mumbai
                > Cluster Tier (M0 Sandbox)
                    > Create Cluster



Database Access
    > Add New Database User
        > Add username
            Auto generated password  (Save this password)
                > Built-in Role
                    Atlas Admin
                        > Add User

Network Access
    > Add IP Address
        > 0.0.0.0/0
          Any Comment


Browser Collection
    > Create Database
    > Create Collection


mongodb+srv://admin:MKJg6gg7@cluster0.f8vmc.mongodb.net/?retryWrites=true&w=majority

unstructured

SQL

RollNo  | Hindi  | English | Computer
  1     |  80    |         |
  2     |        |   78    |
  3     |  77    |         |   90


Mongodb
[
    {
        rollNo:1,
        hindi:80
    },
    {
        rollNo:2,
        english:78
    },
    {
        rollNo:3,
        hindi:77,
        computer:90
    }
]

/// Start mongo server///
* Server need to run first before cli
* Server should always up and running if appliction is connected

# Window
* Open cmd and go inside bin folder
    * C:\programFile\mongodb\5.5.0\server\bin
    * cd C:\programFile\mongodb\5.5.0\server\bin
        * mongod
        (start at port number 27017)

# mac/linux
> open terminal
> mongod --dbpath data/db


/// Start mongo client///
* use to testing querries

# window
> Open cmd and go inside bin folder
> mongo

# mac/linux
> Open terminal
> mongo

SQL         Mongo
--------------------------
Database    Database
Table       Collections
Row         Document
Select      Find
Insert      Insert
Update      Update
Delete      Delete


