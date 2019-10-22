const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Mongoose = require('mongoose');
const path = require('path');


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

app.use(cookieParser());
app.use(bodyParser.json());

// with dist file used, we dont need CORS
//setting headers to manage CORS error if we try to access from angular server
/*
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   // res.setHeader('Access-Control-Allow-Credentials','true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
   next();
})
*/

app.use('/api/Users', AppuserRoutes)
app.use('/api/Idev_user', IdevuserRoutes)


module.exports = app;