const express = require('express')
const app = express()
const port = process.argv[2]
const endPoint = process.argv[3]


app.use(express.json());

app.post('/' + endPoint, (req, res) => {

    async function process(data){
        const auditId = data.data.audit.audit_id
        const user = data.event.triggered_by.name
        const createActionUrl = 'https://api.safetyculture.io/tasks/v1/actions'
        const createActionOptions = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'sc-integration-id': 'sc-readme',
                'content-type': 'application/json',
                authorization: 'Bearer ' + token
            },
            body: JSON.stringify({title: `${user} Inspection Follow Up`})
        };
        console.log(`${auditId} completed by ${user}!`)
        await fetch(createActionUrl,createActionOptions)
        .then((response) => response.json())
        .then(data => {
            const actionId = data.action_id
            console.log(`action ${actionId} created from inspection!`)
        })

    }

    process(req.body)

    res.status(200).send('Webhook received successfully!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
