const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
});
 
const httpServer = http.Server(app);

httpServer.listen(8888, function () {
    console.log('Express server listening to port ' + httpServer.address().port);
});

// app.get('/', (req, res) => {
//   res.sendFile('index.html', {root: path.join(__dirname, "/screens/")});
// });
// // app.get('/', function (req, res) {
// //     res.sendFile(__dirname + './src/index.html',{ root: __dirname });
// // });

// app.listen(1080, function () {
//   console.log('go to localhost:1080 to see site');
// });