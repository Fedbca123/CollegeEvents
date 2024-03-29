const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
const mysql = require('mysql');
const exp = require('constants');

const app = express();

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

const users = require('./routes/users');
const events = require('./routes/events');
const comments = require('./routes/comments');

app.use('/api/users', users);
app.use('/api/events', events);
app.use('/api/comments', comments);

// app.use((req, res, next) => 
// {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PATCH, DELETE, OPTIONS'
//   );
//   next();
// });

const PORT = process.env.PORT || 80;

app.listen(PORT, () => 
{
  console.log('Server listening on port ' + PORT);
});

// connection.end();