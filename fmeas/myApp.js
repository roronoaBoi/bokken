let express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); //using a body parser to break down the json

app.post('/name', function (req,res) {
    const fullName = `${req.body.first} ${req.body.last}`
    res.json({
        name : fullName
    })
})

module.exports = app;
