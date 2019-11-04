const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');

let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');



const AppuserRoutes = require('./routes/Users');
const IdevuserRoutes = require('./routes/Idevuser');

const app = express();
const MongoURL = 'mongodb://Anoop:nTomnAYNlNx0NpM4@meantest-shard-00-00-dc1ia.mongodb.net:27017,meantest-shard-00-01-dc1ia.mongodb.net:27017,meantest-shard-00-02-dc1ia.mongodb.net:27017/test?ssl=true&replicaSet=MeanTest-shard-0&authSource=admin&retryWrites=true&w=majority';
const conn = Mongoose.createConnection(MongoURL,
{ useNewUrlParser: true,  useUnifiedTopology: true });

conn.then(()=>{
    console.log('Connected to Mongo db');
})
.catch((err)=> {
   console.log('Sorry some error occured while connecting to Mongodb');
   console.log(err);
});



// let conn = Mongoose.connection;
// Grid.mongo = Mongoose.mongo;
// let gfs;

 conn.once('open', function() {
    console.log('Opened the connection');
    gfs = Grid(conn.db, Mongoose.mongo)
    gfs.collection('uploads');
 })

 var storage = new GridFsStorage({
   url: MongoURL,
   file: (req, file) => {
     return new Promise((resolve, reject) => {
       crypto.randomBytes(16, (err, buf) => {
         if (err) {
           return reject(err);
         }
         const filename = buf.toString('hex') + path.extname(file.originalname);
         const fileInfo = {
           filename: filename,
           bucketName: 'uploads'
         };
         resolve(fileInfo);
       });
     });
   }
 });
 const upload = multer({ storage });

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


app.get('/api/FILE/files', function(req, res) {

   gfs.files.find().toArray(function (err, files) {
      if(err || !files || files.length===0){
        res.status(401).json({
           err: 'No files found'
        })
      }
      res.status(200).json({
         files
      });
    })
 
})


app.post('/yo',  upload.single('fileLoaded'), function (req, res) {
  // console.dir(req.body.fileLoaded);
   if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false
      });
    } else {
      console.log('file received');
      return res.send({
        success: true
      })
    }
   });
app.use('/api/Users', AppuserRoutes)
app.use('/api/Idev_user', IdevuserRoutes)


module.exports = app;