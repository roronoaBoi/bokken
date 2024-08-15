const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const inputFilePath = path.join(__dirname, 'input.csv');
const outputFilePath = path.join(__dirname, 'output.json');

const results = [];

fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2));
    console.log('CSV file successfully converted to JSON');
  });
