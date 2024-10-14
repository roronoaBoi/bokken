import inquirer from 'inquirer'
const token = process.argv[2]

async function getInspections() {
    const inspections = []
    const rootUrl = 'https://api.safetyculture.io'
    let remainingRecords = 1
    let appendUrl = '/feed/inspections?archived=both&completed=both'
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          authorization: 'Bearer ' + token
        }
      }
    while (remainingRecords > 0) {
        const response = await fetch(rootUrl + appendUrl,options)
        const data = await response.json()
        remainingRecords = await data.metadata.remaining_records
        data.data.forEach(inspection => {
            inspections.push(inspection.id)
        })
        if (remainingRecords > 0) {
            appendUrl = data.metadata.next_page
        }
    }
    return inspections
};

//create other functions to build the lists of items that need to be deleted.

//create async deletion functions that can be called against lists

async function confirmDeletion() {
    const response = await inquirer.prompt([
        {
            type: 'input',
            name: 'confirmation',
            message: 'Type "confirm deletion" to proceed:',
        }
    ]);

    if (response.confirmation === 'confirm deletion') {
        console.log('Proceeding with deletion...');
        return true;
    } else {
        console.log('Deletion cancelled.');
        return false;
    }
};

(async () => {
    const delInspections = await getInspections();
    console.log('inspections queued for deletion: ' + delInspections.length)
    
    //copy lines 53, 54 to call other async functions referenced in line 30.


    const userConfirmed = await confirmDeletion();
    if (userConfirmed) {
        console.log('deleting...')
        //process deletion functions against lists from (ex:53 54)
    } else {
        console.log('No items were deleted.');
    }
})();
