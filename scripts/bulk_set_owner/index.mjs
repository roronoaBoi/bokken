//modules
import neatCsv from 'neat-csv'
import winston from 'winston'
import fs from 'fs/promises'

//create logger
const logger = winston.createLogger({
    level:'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({
            filename:'inspectionOwners.log',
            level:'info'
        })
    ]
});

//runtime args - to be removed after 12 factor design implemented
const token = process.argv[2]

//sets the owner of an inspection to a specified user with the safetyculture open api
async function setInspectionOwner(inspection, user) {
    console.log(`assigning ${inspection} to ${user}...`)
    const url = `https://api.safetyculture.io/inspections/v1/inspections/${inspection}/owner`
    const callOptions = {
        method: 'PUT',
        headers: {
            accept: 'application/json',
            'sc-integration-id': 'sc-readme',
            'content-type': 'application/json',
            authorization: 'Bearer ' + token
        },
        body: JSON.stringify({owner_id: user})
    }
    await fetch(url,callOptions)
    .then((callResponse) => {
        logger.log('info', `${inspection} || ${user} || ${callResponse.statusText}`)
    })
    return
}

//create filestream from csv and make readable by script
async function reader(csvFile) {
    const textData = (await fs.readFile(csvFile)).toString()
    const csv = await neatCsv(textData)
    return csv
}

const inspectionData = await reader('inspections.csv')

//run
for (const row of inspectionData) {
    await setInspectionOwner(row.inspection, row.user)
}