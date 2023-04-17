const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
const mysql = require('mysql');
const exp = require('constants');

const app = express();


const connection = mysql.createConnection({
  host: 'collegeevents.fun',
  user: 'root',
  password: '4710COPP',
  database: 'COP4710'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
})

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

// app.listen(PORT, () => 
// {
//   console.log('Server listening on port ' + PORT);
// });

connection.end();