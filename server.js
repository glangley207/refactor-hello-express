// server.js
// where your node app starts

console.log(`hi from 'server.js'`) // server side console -- glitch.com "web window"

// init project
const express     = require('express');   // see:   https://expressjs.com/en/4x/api.html
const app         = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  console.log(`pre 'sendFile'`)
  response.sendFile(__dirname + '/views/index.html');
  console.log(`post 'sendFile'`)});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);});

// :dm - my test of nodejs file sys persistance functionality
// const fs     = require('fs')
// function write_whole_file(path, data) {
//     let fd         = fs.openSync(path, 'w')
//     fs.writeFileSync(fd, data)
//     fs.closeSync(fd)}
// write_whole_file('./test2.txt','junk 22')
// let s    = fs.readFileSync('./test.txt')
// console.log('read data:',`${s}`)
