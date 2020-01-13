var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
//Used for using ejs file in node
app.set('view engine','ejs');

//used for setting the directory
app.set('views','./views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));
app.use(session({ secret: "String for encrypting cookies." }));
const player =require('./models/player_model');
//Etl procedure
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb+srv://robert:sxqf2n7z4jZ86IJ0@cluster0-xkkpl.mongodb.net/";//which url should be here

const csvFilePath='stadium.csv' //extract
const csv=require('csvtojson')  

// csv()
// .fromFile(csvFilePath)   //transform
// .then((jsonObj)=>{
//     console.log(jsonObj);
//
// 	MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
// 	  if (err) throw err;
// 	  var dbo = db.db("test");//db load
// 	  dbo.collection("stadium").insertMany(jsonObj, (err, res) => { //load collection
// 		if (err) throw err;
// 		console.log("Number of documents inserted: " + res.insertedCount);
// 		db.close();
// 	  });
// 	});
// })
//Etl ends
const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://robert:sxqf2n7z4jZ86IJ0@cluster0-xkkpl.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true ,poolSize:100})
.then(result => {
  console.log("connected to mongo");
})
.catch(err =>{
  console.log(err);
});

app.use('/', index);
// app.post('/getData', function(req, res) {

//     console.log("got the request to enter data");
// console.log(req.body.name);



//   // player.find({_id:'5db0afc9d4a6081be513841c'},function(err,doc){

//   //   if(doc)
//   //   {
//   //     console.log("doc found");
//   //     console.log(doc);
//   //     // res.json(doc);
//   //   }
//   // });



//   const player1=new player({

//     _id: new mongoose.Types.ObjectId(),
//     name: req.body.name,
//     email:req.body.email,
//     match:req.body.match

//   });
//   player1.save().then(resul =>{
//     console.log(resul);
//     console.log("player enrolled");

//   })
//   .catch(err => {
//     console.log(err);
   
  
//   });


// });






module.exports = app;
app.listen(5000);
