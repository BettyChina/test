// require mongoose

const mongoose = require('mongoose');

// set mongoose's promise to the global promise, even if we don't use it, it makes the warning message go away

mongoose.Promise = global.Promise;

// file server

const fs = require('fs');

// path to make it a little easier to write file paths

const path = require('path');

// connect to a database, CHANGE THIS PER PROJECT

mongoose.connect('mongodb://localhost/taskAPI', {useMongoClient: true});

// save the path to the models folder
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }
});
