var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//server configuration
var basePath = '/notes';
var port = 6200;

// Mongo Connection


//mongoose.connect('mongodb://karinotes:karinotes@ds161793.mlab.com:61793/heroku_f42rzdgv')
mongoose.connect('mongodb://karinotes:karinotes@ds231460.mlab.com:31460/karinotes')



    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });


var notesRoutes = require('./src/routes/notesRoutes');

// Application
var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, notesRoutes);

// Execute Application
app.listen(port, () => {
  console.log('Notes Node Backend running on Port: ',port);
});
