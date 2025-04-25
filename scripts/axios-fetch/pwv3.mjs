import { writeFileSync } from 'fs';

const url = 'https://dummyjson.com/users'

async function fetchAllUsers() {
    let userList = []
    let total = 0
    let skip = 0
    let limit = 50
    let hasMore = true
    let params = `?limit=${limit}&skip=${skip}`
    let iterations = 1

    while(hasMore){
        console.log(`fetching page ${iterations}...`)
        const response = await fetch(`${url}${params}`)
        if(!response.ok){
            console.log(`error fetching from api: ` + response.status)
            break
        } else {
            const json = await response.json()
            const users = json.users
            userList = userList.concat(users)
            iterations++
            total = json.total
            skip += limit

            hasMore = skip < total
        }
    }

    console.log('fetched all records!')
    return userList
};

const users = await fetchAllUsers()

const jsonFile = JSON.stringify(users, null, 2)
writeFileSync('jsonData.json',jsonFile,'utf-8');
