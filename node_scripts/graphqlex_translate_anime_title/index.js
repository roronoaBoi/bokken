const searchValue = process.argv[2];

const query = `
query ($search: String) {
  Media(search: $search, type: ANIME) {
    id
    title {
      romaji
      english
      native
      userPreferred
    }
  }
}
`;

const variables = {
  search: searchValue
};

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

// Make the HTTP API request
fetch(url, options).then(handleResponse)
                  .then(handleData)
                  .catch(handleError);

function handleResponse(response) {
  return response.json().then(function (json) {
    return response.ok ? json : Promise.reject(json);
  });
}

function handleData(data) {
//   const item = JSON.stringify(data, null, 2)
if (data.data.Media.title.english === null) {
    console.log(`${searchValue} could not be verified in English. Try another search!`)
} else {
const engName = data.data.Media.title.english
const japName = data.data.Media.title.native
console.log(`If you meant to find ${engName}, the name in Japanese is ${japName} `)
}
  
}

function handleError(error) {
  if (error.errors && error.errors.length > 0) {
    error.errors.forEach(err => {
      console.log(`Searched value ${err.message}`);
    });
  } else {
    console.log('An unknown error occurred.');
  }
}

