let express = require('express');
require('dotenv').config()
let app = express();

app.get('/name', function(req,res){

const firstName = req.query.first
const lastName = req.query.last
res.json({
    "name":firstName + ' ' + lastName
})

});

module.exports = app;
