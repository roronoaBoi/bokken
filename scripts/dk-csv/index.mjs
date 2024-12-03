import { createObjectCsvWriter } from 'csv-writer';

console.log('Working directory:', process.cwd());

const csvWriter = createObjectCsvWriter({
    path:'./msg.csv',
    header : [
        {id: 'msg', title: 'MESSAGE'}
    ]
});

const entry = [
    {msg: 'hello ro'}
]

async function main(){
    try {
        await csvWriter.writeRecords(entry)
        console.log('document written')
    } catch (error) {
        console.error('error writing csv ', error)
    }    
}

main()
