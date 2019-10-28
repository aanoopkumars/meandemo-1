const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Mongoose = require('mongoose');
const path = require('path');

let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');



const AppuserRoutes = require('./routes/Users');
const IdevuserRoutes = require('./routes/Idevuser');

const app = express();
Mongoose.connect('mongodb://Anoop:nTomnAYNlNx0NpM4@meantest-shard-00-00-dc1ia.mongodb.net:27017,meantest-shard-00-01-dc1ia.mongodb.net:27017,meantest-shard-00-02-dc1ia.mongodb.net:27017/test?ssl=true&replicaSet=MeanTest-shard-0&authSource=admin&retryWrites=true&w=majority',
{ useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to Mongo db');
})
.catch((err)=> {
   console.log('Sorry some error occured while connecting to Mongodb');
   console.log(err);
});

// let conn = Mongoose.connection;
// Grid.mongo = Mongoose.mongo;
// let gfs = Grid(conn.db);

app.use(cookieParser());
app.use(bodyParser.json());

// with dist file used, we dont need CORS
//setting headers to manage CORS error if we try to access from angular server

app.use((req, res, next) => {
 //  res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   // res.setHeader('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
   next();
})
/*
// Setting up the storage element
let storage = GridFsStorage({
   gfs : gfs,

   filename: (req, file, cb) => {
       let date = Date.now();
       // The way you want to store your file in database
       cb(null, file.fieldname + '-' + date + '.'); 
   },
   
   // Additional Meta-data that you want to store
   metadata: function(req, file, cb) {
       cb(null, { originalname: file.originalname });
   },
   root: 'ctFiles' // Root collection name
});
*/

app.post('/api/File/upload', (req, res) => {
   upload(req,res, (err) => {
       if(err){
            res.json({error_code:1,err_desc:err});
            return;
       }
       res.json({error_code:0, error_desc: null, file_uploaded: true});
   });
});


app.use('/api/Users', AppuserRoutes)
app.use('/api/Idev_user', IdevuserRoutes)


module.exports = app;