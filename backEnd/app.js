const express = require('express');
const bodyParser = require('body-parser');
const MongoUser = require('./dbModels/User');
const Mongoose = require('mongoose');

const app = express();
Mongoose.connect('mongodb+srv://Anoop:POnSgCHbiaaDRuqI@cluster0-dc1ia.mongodb.net/Roles?retryWrites=true&w=majority',
{ useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to Mongo db');
})
.catch((err)=> {
   console.log('Sorry some error occured while connecting to Mongodb');
   console.log(err);
});


app.use(bodyParser.json());

let users = [
    {
        userName: "Anoop",
        role: "Manager",
        mailID: "aanoopkumars@gmail.com",
        aplicationName: "Idevelop",
        id: 1
    }
   ];
//setting headers to manage CORS error if we try to access from angular server

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
   next();
})

app.post('/api/Users',(req, res, next) => {
  //  addedUser = req.body;
   addedUser = new MongoUser({
    userName: req.body.userName,
    role: req.body.role,
    mailID: req.body.mailID,
    aplicationName: req.body.aplicationName
   })
   
  // console.log(addedUser);
   addedUser.save(()=> {
       console.log('saved succesfully');
   });
  //  users.push(addedUser);
    res.status(200).json({'Message':'User added'});
})

app.get('/api/Users',(req, res, next) => {
   MongoUser.find((err, response)=> {
      if(err){
          console.log('sorry, some error during fetching users from mongo(app.js)');
          throw Error('Some server err ocuured on app.js');
      }
      console.log(response);
      res.status(200).json(response);
   })
   
})


module.exports = app;