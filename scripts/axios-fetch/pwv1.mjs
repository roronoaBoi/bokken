import { writeFileSync } from 'fs';

const url = 'https://dummyjson.com/users'

async function fetchUsers() {
    let users = []
    let limit = 50
    let skip = 0
    let total = 0
    let hasMore = true

    while(hasMore) {
        const response = await fetch(`${url}?limit=${limit}&skip=${skip}`)
        if(!response.ok){
            console.log('error fetching from api...')
        } else {
            const json = await response.json()
            users = users.concat(json.users)
            total = json.total
            skip += limit
            hasMore = skip < total
        }
        console.log('finished fetching...')
        return users
    }
};

const userData = await fetchUsers()

const jsonFile = JSON.stringify(userData, null, 2)
writeFileSync('jsonData.json',jsonFile,'utf-8');

console.log('created JSON doc in local directory...')
