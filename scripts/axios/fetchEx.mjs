const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)//no options for this test api
.then(response => {
    if (!response.ok) {
        throw new Error('Response not OK') //errors have to be handled. see axiosEx for built in error handling at response level
    }
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.error('Call not OK. See error: ',error))
