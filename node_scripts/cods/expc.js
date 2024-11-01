const express = require('express');
const app = express();

const jsonMes = {
    name : "ro",
    kd : 1.23,
    status : ["okay"]
}

app.get('/newPath', async function(req,res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const jsonResponse = await response.json()
    res.send(jsonResponse)
})
app.listen(3000, () => console.log('app listening on localhost 3000...'))
