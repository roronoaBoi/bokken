import {writeFileSync} from 'fs'

const url = 'https://dummyjson.com/users'

async function fetchAllUsers(){
    let userList = []
    let limit = 50
    let skip = 0
    let total = 0
    let hasMore = true
    let ammendUrl = `?limit=${limit}&skip=${skip}`
    
    while(hasMore){
        const response = await fetch(`${url}${ammendUrl}`)
        if(!response.ok) {
            console.log(`error fetching from api`)
            break
        } else {
            const json = await response.json()
            const users = json.users
            userList = userList.concat(users)
            total = json.total
            skip += limit
            hasMore = skip < total
        }
    }
    console.log(`finished fetching records`)
    return userList
};

const items = await fetchAllUsers()

const jsonFile = JSON.stringify(items, null, 2)
writeFileSync('jsonData.json',jsonFile,'utf-8');
