const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');


const app = express();
const port = process.env.PORT || 5555;

const userRouter = require('./routes/users');
app.use('/users', userRouter);

// using ejs as templating engine
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});