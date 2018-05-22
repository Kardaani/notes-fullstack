var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema
var Notes = new Schema({
  desc: {
    type: String
  },

},{
    collection: 'Tasks'
});

module.exports = mongoose.model('Notes', Notes);
