import {Personne} from "./Personne.js";
export class Enseignant extends Personne{
    constructor(cours,dept,annee,id,nom,prenom,tel,email){
        super (id,nom,prenom,tel,email);
        this.cours=cours;
        this.dept=dept;
        this.annee=annee;
    }
}
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("my");
  dbo.createCollection("Enseignant", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});