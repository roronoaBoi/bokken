//Runtime arguments
const token = process.argv[2]
const audit = process.argv[3]

async function getAuthor (audit) {
    const url = `https://api.safetyculture.io/audits/${audit}`
    const callOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'sc-integration-id': 'sc-readme',
      authorization: 'Bearer ' + token
    }
  };
  await fetch(url,callOptions)
    .then(response => response.json())
    .then(data => {
        const user = data.audit_data.authorship.author
        console.log(user)
    })
}

getAuthor(audit)