const express = require('express');
const app = express();
const port = 8700;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const Pool = require('pg');
const pool = new Pool({
    user:'',
    host:'127.0.0.1',
    port:5432,
    database:'postgres'
})