const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');

const MongoUser = require('./dbModels/User')

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
  //  console.dir(Mongoose.connections[0].db)

    gfs = Grid(Mongoose.connections[0].db, Mongoose.mongo)
    gfs.collection('uploads');
})
.catch((err)=> {
   console.log('Sorry some error occured while connecting to Mongodb');
   console.log(err);
});


const MongoURL = 'mongodb://Anoop:nTomnAYNlNx0NpM4@meantest-shard-00-00-dc1ia.mongodb.net:27017,meantest-shard-00-01-dc1ia.mongodb.net:27017,meantest-shard-00-02-dc1ia.mongodb.net:27017/test?ssl=true&replicaSet=MeanTest-shard-0&authSource=admin&retryWrites=true&w=majority';
/*
const conn = Mongoose.createConnection(MongoURL,
{ useNewUrlParser: true,  useUnifiedTopology: true });

conn.then(()=>{
    console.log('Connected to Mongo db');
})
.catch((err)=> {
   console.log('Sorry some error occured while connecting to Mongodb');
   console.log(err);
});


 conn.once('open', function() {
    console.log('Opened the connection');
    gfs = Grid(conn.db, Mongoose.mongo)
    gfs.collection('uploads');
 })
*/
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
       return res.status(401).json({
           err: 'Sorry, some error occured'
        })
      }


      res.status(200).json({
         files
      });
    })
 
})

app.get('/api/FILE/files/:filename',(req, res)=> {
  //  console.log(req.params.filename);
  gfs.files.find({filename: req.params.filename}).toArray((err, file) => {
      
    if(err || !file || file.length===0){
     return res.status(401).json({
         err: 'Sorry, some error occured'
      })
    }
    
  //  console.log(file);
          // creating read stream
  let readStream = gfs.createReadStream({
    filename: file[0].filename,
    root: "uploads"
  })

   // setting proper content type
    res.set('Content-Type', file[0].contentType);

   // res.json({file: file})
   return readStream.pipe(res);

  })

  
})

app.get('/api/FILE/import/:filename',(req, res)=> {
  //  console.log(req.params.filename);
  buffer = "";
 // fN = '12f4797c1daa627ac02124f56783c7b2.csv';
   gfs.files.find({filename: req.params.filename}).toArray((err, file) => {
  //  gfs.files.find({filename: fN}).toArray((err, file) => {
      
    if(err || !file || file.length===0){
     return res.status(401).json({
         err: 'Sorry, some error occured'
      })
    }
    
  //  console.log(file);
    
          // creating read stream
  let readStream = gfs.createReadStream({
    filename: file[0].filename,
    root: "uploads"
  })


  readStream.on("data", function (chunk) {
    buffer += chunk;
    
});


// dump contents to console when complete
readStream.on("end", function (data) {
      //  let buffArray = buffer.replace(/[\r\n]+/g," ").split(';');
      let buffArray = buffer.split('\r\n');
        buffArray.forEach(element => {
          if(element){
          let elmArr = element.split(',');
          let user = new MongoUser({
            userName: elmArr[0],
            role: elmArr[1],
            mailID: elmArr[2],
            aplicationName: elmArr[3]
          })

        //  console.log(user);

          user.save((data)=> {
            console.log('saved to DB by import');
        });
        
      }

        }); 
    
    

    res.status(200).json({message: 'imported'});


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