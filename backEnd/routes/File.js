const Fexpress = require('express');
const Froutr = Fexpress.Router();

const path = require('path');
const crypto = require('crypto');
let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');

const MongoUser = require('../dbModels/User')

const MongoURL = 'mongodb://Anoop:nTomnAYNlNx0NpM4@meantest-shard-00-00-dc1ia.mongodb.net:27017,meantest-shard-00-01-dc1ia.mongodb.net:27017,meantest-shard-00-02-dc1ia.mongodb.net:27017/test?ssl=true&replicaSet=MeanTest-shard-0&authSource=admin&retryWrites=true&w=majority';

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

module.exports = (io, gfs) => {

    Froutr.get('/api/FILE/files', function(req, res) {

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
     
     Froutr.get('/api/FILE/files/:filename',(req, res)=> {
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
     
     Froutr.get('/api/FILE/import/:filename',(req, res)=> {
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
     
             console.log(sio());
             /*
               user.save((data)=> {
                 console.log('saved to DB by import');
             });
             */
             
           }
     
             }); 
         
         
     
         res.status(200).json({message: 'imported'});
     
     
     });
     
        
     
     
       })
     
       
     
       
     })
     
     Froutr.post('/yo',  upload.single('fileLoaded'), function (req, res) {
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
     

     return Froutr;   
}  

