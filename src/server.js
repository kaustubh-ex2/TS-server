// import * as express from 'express';

// const app:  = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });
// app.listen(port, err => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(__dirname);
//   return console.log(`listening on ${port}`);
// });
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var path = require('path');

var db;
MongoClient.connect("mongodb://localhost:27017/", function(err, dbs) {
  if(err)
    throw err;
  else
    db = dbs;
});
// Create a new express application instance
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/insert', function(req, res) {
  let dbo = db.db("blaa");
  let myobj = { name: req.body.name };
  dbo.collection("emp").insertOne(myobj, function(err, _) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    res.redirect('/');
  });
});

app.get('/list', function(_, res){
  let dbo = db.db("blaa");
  dbo.collection("emp").find({}, {projection: {_id: 0}}).toArray(function(err, data) {
    if (err) throw err;
    console.log("Listing all docs", data);
    res.json(data);
    db.close();
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});