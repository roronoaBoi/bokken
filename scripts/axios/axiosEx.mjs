import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

axios.get(url)
.then(response => console.log(response.data))
.catch(error => ('Call not OK: ', error))
