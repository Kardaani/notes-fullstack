var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//server configuration
var basePath = '/notes';
var port = 6200;

// Connection to DB

mongoose.connect('mongodb://karinotes:karinotes@ds231460.mlab.com:31460/karinotes')


//mongoose.connect('mongodb://mongodb')
    .then(() => {
      console.log('Backend Started');
    })
    .catch(err => {
        console.error('Backend error:', err.stack);
        process.exit(1);
    });

// Routes and Backend Funcioncalities
var notesRoutes = require('./src/routes/notesRoutes');

// App Instance
var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, notesRoutes);

// Execute App
app.listen(port, () => {
  console.log('Notes Backend running on Port: ',port);
});
