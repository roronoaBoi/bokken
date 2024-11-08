//example json from previous automation
const input = {
    "data":[
        {
            "name":"ro",
            "age": 10,
            "favorite_color":"green"
        },
        {
            "name":"thal",
            "age": 12,
            "favorite_color":"pink"
        },
        {
            "name":"linc",
            "age": 14,
            "favorite_color":"orange"
        },
    ]
}
//function defined in IPaaS 
exports.main = async ({ input }) => {
    const payload = input
    const myName = payload.data[0].name
    const myAge = payload.data[0].age
    return { myName, myAge }; 
}

//what the embedded code will return
const item = exports.main({input})
console.log(item)
