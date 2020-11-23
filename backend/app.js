
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan');
//const MongoClient = require("mongodb").MongoClient;
//const MongoClient = require('mongodb').MongoClient
//const mongoPractice = require("./mongoose");
const mongoose = require('mongoose');
//const Product = require('./models/todo');
const todoRoutes = require('./routes/todoRoutes');

//const url ="mongodb+srv://naum4ik:naumchas2010@cluster0.wxzfi.mongodb.net/todos?retryWrites=true&w=majority";

//not here+export



mongoose.connect(
  //"mongodb+srv://naum4ik:naumchas2010@cluster0.wxzfi.mongodb.net/todos?retryWrites=true&w=majority"
  "mongodb+srv://artyom:8104662A@cluster0.eeku0.mongodb.net/artem_to_do_list?retryWrites=true&w=majority"
).then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
});

var db, collection;
// const url = "mongodb+srv://demo:demo@cluster0-q2ojb.mongodb.net/test?retryWrites=true";
//const url = "mongodb+srv://naum4ik:naumchas2010@cluster0.wxzfi.mongodb.net/todoList?retryWrites=true&w=majority"
//const dbName = "demo2";


app.use(bodyParser.json());


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use('/api/todos', todoRoutes);

//app.post("/items", mongoPractice.createProduct);
app.listen(3000)

// app.listen(3000, () => {
//   MongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }, (error, client) => {
//     if (error) {
//       throw error;
//     }
//     db = client.db(dbName);
//     console.log("Connected to `" + dbName + "`!");
//   });
// });

//"exit"! + error

// app.set('view engine', 'ejs')
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
// app.use(bodyParser.json())
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//   db.collection('list').find().toArray((err, result) => { //!list
//     if (err) return console.log(err)
//     res.render('index.ejs', {
//       list: result
//     })
//   })
// })

// //try+catch

// app.post('/list', (req, res) => {
//   db.collection('list').insertOne({
//     toDo: req.body.toDo,
//     completed: false
//   }, (err, result) => {
//     if (err) return console.log(err)
//     console.log('saved to database')
//     res.redirect('/') //json
//   })
// })

// //null?


// app.delete('/list', (req, res) => {
//   db.collection('list').findOneAndDelete({
//     toDo: req.body.toDo
//   }, (err, result) => {
//     if (err) return res.send(500, err)
//     res.send('Message deleted!')
//   })
// })

// app.delete('/completed', (req, res) => {
//   db.collection('list').findOneAndDelete({
//     toDo: req.body.toDo
//   }, (err, result) => {
//     if (err) return res.send(500, err)
//     res.send('Message deleted!')
//   })
// })


//!delete