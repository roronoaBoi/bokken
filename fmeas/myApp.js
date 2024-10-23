let express = require('express');
require('dotenv').config()
let app = express();

// const absolutePath = __dirname + '/views/index.html'

// const path = __dirname + '/public'

// let message = "Hello json"
// let object = {
//     "message" : ""
// }

// app.use('/public', express.static(path));

app.get('/now', function(req,res, next){
//     // res.send(message);

//     // res.json(absolutePath)

//     // if (process.env.MESSAGE_STYLE === 'uppercase') {
//     //     object.message = message.toUpperCase()
//     //     res.json(object)
//     // } else {
//     //     object.message = message
//     //     res.json(object)
//     // }

// const method = req.method
// const path = req.path
// const ip = req.ip
// console.log(`${method} ${path} - ${ip}`)
// console.log(res) //extra
// next()

req.time = new Date().toString()
next();
},
function(req,res) {
    const time = {
        "time": req.time
    }
    res.send(time)
});

module.exports = app;
