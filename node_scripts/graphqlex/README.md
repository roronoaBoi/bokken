# GraphQL 
GraphQL is a query language that allows for specific data retrieval. QraphQL APIs use HTTP as the protocol, similarly to REST APIs. Traditional REST APIs might return an object like the following:
```json
{
  "data": {
    "Media": {
      "id": 15127,
      "title": {
        "romaji": "Sakura Taisen: Kanadegumi",
        "english": null,
        "native": "サクラ大戦 奏組"
      }
    }
  }
}
```

The only differe is that a GraphQL API offers the ability to structure a query for only the keys needed.

```js
//build query variable according to API documentation.
const query = `
query ($id: Int) {
  Media(id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
  }
}
`

//structure the http call
const url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    };

//make the api call
fetch(url,options)

//...process query results

```

Many businesses use GraphQL APIs to optimize integration and reporting processes. A strong understanding of handling HTTP requests is crucial for effectively using APIs, making GraphQL an important skill.

