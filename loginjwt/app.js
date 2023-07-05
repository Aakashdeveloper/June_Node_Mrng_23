import express from 'express';
import cors from 'cors';
const app = express();
import db from './db.js';
const port = process.env.PORT || 5000;

app.use(cors());

import AuthController from './controller/AuthController';

app.use('/api/auth',AuthController);

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})