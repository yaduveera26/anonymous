let mongoose = require('mongoose');

let dataschema = mongoose.Schema({
    name:{
        type : String
    },
    content:{
        type : String
    }
    
});

let data = module.exports = mongoose.model('data',dataschema);