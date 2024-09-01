import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

// fetch - this simple format doesn't work because you have to convert to JSON first. see line 8
const response = await fetch(url)
const payload = await response.json()
const item = payload[0]
console.log(item)


// axios automatically handles JSON
const payloadAx = await axios.get(url)
const itemAx = payloadAx.data[0]
console.log(itemAx)
