// Express

const express = require('express');
const app = express();

// Body parser

const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Static files, which tells us where to find all static files in the dist folder, including index.html

app.use(express.static(__dirname + '/public/dist/public'));

// mongoose is found in the config folder

const mongoose = require('./server/config/mongoose.js')

// routes are found in the config folder

const routes = require('./server/config/routes.js')(app);

app.listen(8000, ()=>{
    console.log("Listening on port 8000!")
});