const PORT = 8888;
var express = require('express'); //used for routing

const app = express(); //we require 2 packages to start a server
const cors= require('cors');
app.use(cors());

// var path = require('path');
const http = require('http').Server(app); //used to provide http functionality. http is already included in nodejs as default no need install


// const auth = require('./api/auth');

//must allow files to be hosted into a public folder in your server.
// app.use(express.static(__dirname + '/www'));

app.use(express.urlencoded({extended: true})); // Parses incoming requests with URL-encoded data
app.use(express.json()); // Parses incoming requests with JSON payloads

app.post('/login', require('./api/auth'));
app.post('/profile', require('./api/profile'));


http.listen(PORT, 
    () => {
        console.log('Server listening on:' + PORT);
    }
    );

