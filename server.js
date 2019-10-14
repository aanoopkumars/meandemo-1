const http = require('http');
const app = require('./backEnd/app.js');
const port = process.env.PORT;

app.set('port',port);

// const server = http.createServer((req, res) => {

//     res.end('<h1>Hello world</h1>')
// });

const server = http.createServer(app);


server.listen(port || 3000,() => {
    console.log('Server is up on 3000');
});