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

// app.get('/now', function(req,res, next){ //1-8
app.get('/:goobly/echo', function(req,res, next){ //9
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

//you can always naviagte to the endpoint for 'lazy debugging' to see what is hanging up the app
// req.time = new Date().toString()
// next();
// },
// function(req,res) {
//     const time = {
//         "time": req.time
//     }
//     res.send(time)

//9
const word = req.params.goobly
const pWord = word.replace(':','')
res.json({
    "echo": pWord
})
next()

//10


});

module.exports = app;
