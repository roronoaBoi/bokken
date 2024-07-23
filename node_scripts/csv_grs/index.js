const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'responses.csv',
    header: [ 'id','label']
});

//fetch for records... pagination?
function getResponseSet () {
    const responses = [[]]
    //fetch
    //process returned values and populate responses.
    //return responses and pass it into csv-writer
}

await csvWriter.writeRecords(list)

