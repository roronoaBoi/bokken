const express = require('express')
const app = express()
const port = process.argv[2]
const endPoint = process.argv[3]
const token = process.argv[4]

app.use(express.json());

app.post('/' + endPoint, (req, res) => {

    async function process(data){
        //instead of actionURL stuff, use the endpoint that removes inspection access from
        //the completer... this shouldn't override permissions in SC, so it wont lock out
        //an admin I think... reassign to an admin and make sure template rules harmonize
        const auditId = data.data.audit.audit_id
        const userId = data.data.audit.audit_data.authorship.author_id
        const removeAccessUrl = `https://api.safetyculture.io/inspections/v1/inspections/${auditId}/user/${userId}/access?new_owner_id=1d1afa78-7616-4734-ab5a-a5d6624f20f5`
        const removeAccessOptions = {
            method: 'DELETE',
            headers: {
                accept: 'application/json',
                'sc-integration-id': 'sc-readme',
                'content-type': 'application/json',
                authorization: 'Bearer ' + token
            }
        };
        console.log(`${auditId} completed by ${userId}... removing access...`)
        await fetch(removeAccessUrl,removeAccessOptions)
        .then((response) => response.json())
        .then(data => {
            const inspectionId = data.inspection_id
            console.log(`${inspectionId} locked!`)
        })

    }

    process(req.body)

    res.status(200).send('Webhook received successfully! Inspection locked!');
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
