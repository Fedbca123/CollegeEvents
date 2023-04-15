const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
// var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '4710COPP',
  database: 'COP4710'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
})

// connection.end();

const app = express();
const port = process.env.PORT || 5555;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

// using ejs as templating engine
app.set('view engine', 'ejs');


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});