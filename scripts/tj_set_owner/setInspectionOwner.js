// All Params
// const csvFilePath = '/Users/tjhelton/Downloads/Scratch Pad Sheet2 (1).csv';
// const token = '3bafd37fcd1fa5c1bd6156c6342075b9e4c8240ea9c9d448c807b6ef0e0faf12';
// const newOwnerID = '75de0bee-984c-4dad-b361-9e91c315744e'; // *** USE THIS ONLY WHEN NEW OWNER IS STATIC
// const oldOwnerID = '7ed69e6a-4655-482c-9949-efb579dd1e6c'; // *** USE THIS ONLY WHEN OLD OWNER IS STATIC

// All Params, swapped owners for testing
const csvFilePath = '/Users/tjhelton/Downloads/Scratch Pad Sheet2 (1).csv';
const token = '3bafd37fcd1fa5c1bd6156c6342075b9e4c8240ea9c9d448c807b6ef0e0faf12';
const oldOwnerID = '75de0bee-984c-4dad-b361-9e91c315744e'; // *** USE THIS ONLY WHEN NEW OWNER IS STATIC
const newOwnerID = '7ed69e6a-4655-482c-9949-efb579dd1e6c'; // *** USE THIS ONLY WHEN OLD OWNER IS STATIC


// Required packages
const fs = require('fs');
const csv = require('csv-parser');
const axios = require('fetch');

// Options for Fetch request in the function below (remove user)

const remOptions = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      'sc-integration-id': 'sc-readme',
      authorization: `Bearer ${token}`
    }
  };

  // Function to process each row, make request to update inspection owner + remove prev owner's access
async function processCSV(csvFilePath) {
    const results = [];

    try {
        const stream = fs.createReadStream(csvFilePath);

        await new Promise((resolve, reject) => {
            stream.pipe(csv())
                .on('data', async (data) => {
                    try {

                        const insp = data.inspection;

                        // *** USE THIS ONLY WHEN OLD OWNER IS DYNAMIC
                        // const oldOwnerID = data.oldOwner

                        // *** USE THIS ONLY WHEN NEW OWNER IS DYNAMIC
                        // const newOwnerID = data.newOwner

                        const remResponse = await fetch(`https://api.safetyculture.io/inspections/v1/inspections/${insp}/user/${oldOwnerID}/access?new_owner_id=${newOwnerID}`, remOptions);
                        const remDataRaw = await remResponse.json();
                        const remData = remDataRaw.inspection_id

                        console.log(`Inspection: ${remData}`)

                    } catch (error) {
                        console.error(`Error processing row: ${error.message}`);
                    }
                })
                .on('end', () => {
                    console.log('Processing complete.');
                    resolve(results);
                })
                .on('error', (error) => {
                    reject(error);
                });
        });
    } catch (error) {
        console.error(`Error processing CSV file: ${error.message}`);
    }
}

// Execute function with variables defined up top
processCSV(csvFilePath, token, newOwnerID, oldOwnerID); // *** REMOVE DYNAMIC VARIABLES AS NEEDED (Dynamic Variables Defined In Function)

