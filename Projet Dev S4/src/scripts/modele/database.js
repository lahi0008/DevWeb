var mongo=require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
//
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("college", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
//
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var college = [
    { code: '012t', nom:'CEM Mame Fatou', address: 'Dakar', departements:'Litterature'},
    { code: '012f', nom:'UFR SES', address: 'Thies', departements:'Management'},
    { code: '01at', nom:'UFR SI', address: 'Thies', departements:'Geoscience'},
    { code: '012h', nom:'UFR SANTE', address: 'Thies', departements:'Ophtalmo'},
    { code: '0001', nom:'CEM DIAWARA', address: 'Diawara', departements:'Science'},
    
  ];
  dbo.collection("customers").insertMany(college, function(err, res) {
    if (err) throw err;
    console.log("Le nombre de college inseré est de : " + res.insertedCount);
    db.close();
  });
});
//
