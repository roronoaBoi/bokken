//in Prog
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts'

//this doesnt work because the call isn't complete yet
// const dorb = axios.get(url)
// .then(responseFromCall => console.log(responseFromCall.data))
// .catch(error => console.error(error));

// console.log(dorb[0])

//fix one:
async function getIt() {
    await axios.get(url)
    .then(responseFromCall => {
        const data = responseFromCall.data;
        return data[0];  // Access and log the first object
    })
    .catch(error => console.error(error));
}

const derb = await getIt()

console.log(derb)

    
