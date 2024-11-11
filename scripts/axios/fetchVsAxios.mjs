import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch example
const response = await fetch(url)
const payload = await response.json()
const item = payload[0]
console.log(item)


// axios example
const payloadAx = await axios.get(url)
const itemAx = payloadAx.data[0]
console.log(itemAx)
