async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const jsonResponse = await response.json()
    console.log(jsonResponse)
};

getData();