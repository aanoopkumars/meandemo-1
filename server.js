const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const Mongoose = require('mongoose');
let Grid = require('gridfs-stream');
const app = express();
const port = process.env.PORT;
const path = require('path');

const AppuserRoutes = require('./backEnd/routes/Users');
const IdevuserRoutes = require('./backEnd/routes/Idevuser');


Mongoose.connect('mongodb://Anoop:nTomnAYNlNx0NpM4@meantest-shard-00-00-dc1ia.mongodb.net:27017,meantest-shard-00-01-dc1ia.mongodb.net:27017,meantest-shard-00-02-dc1ia.mongodb.net:27017/test?ssl=true&replicaSet=MeanTest-shard-0&authSource=admin&retryWrites=true&w=majority',
{ useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to Mongo db');
  //  console.dir(Mongoose.connections[0].db)

    gfs = Grid(Mongoose.connections[0].db, Mongoose.mongo)
    gfs.collection('uploads');
    const FileRoutes = require('./backEnd/routes/File')(null, gfs)
    app.use('/api/FILE', FileRoutes)  
})
.catch((err)=> {
   console.log('Sorry some error occured while connecting to Mongodb');
   console.log(err);
});


app.use(cookieParser());
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // res.setHeader('Access-Control-Allow-Credentials','true');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
    next();
 })
app.use(express.static(__dirname+ '/dist/sampleAngApp'));

app.set('port',port);
app.get('*', (req, res)=> { 
    
    res.sendFile(path.join(__dirname, '/dist/sampleAngApp/index.html'))}
    );


app.use('/api/Users', AppuserRoutes)
app.use('/api/Idev_user', IdevuserRoutes)


const server = http.createServer(app);
const io = require('socket.io')(server);

/*
io.on("connection", socket => {
    setTimeout(()=> {
        socket.emit("check1", "first item completed")
    },3000);

    setTimeout(()=> {
        socket.emit("check1", "second item completed")
    },6000);

    setTimeout(()=> {
        socket.emit("check1", "third item completed")
    },9000);
    
})
*/



server.listen(port || 3000,() => {
    console.log('Server is up on 3000');
});