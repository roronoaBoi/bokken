import axios from 'axios'

// URL of the API endpoint
const url = 'https://api.safetyculture.io/users/user_45f7faca4f9243f3b55f32ff9cc20533';

const data = {"lastname":"chorb"}

const headers = {
    headers: {
      accept: 'application/json',
      'sc-integration-id': 'sc-readme',
      'content-type': 'application/json',
      authorization: 'Bearer '
    }}

axios.put(url, data, headers)
  .then(response => {
    console.log('Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
