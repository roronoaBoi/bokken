# Bulk Set Owner
The purpose of this script is to change the owner(s) of several inspections. This leverages SafetyCulture's open API.

## Set Up:
This script uses the winston and neat-csv node modules. Ensure they are installed by running the following command before running the script: `npm i`

## Running the Script:
Create a csv file entitled `inspections.csv` and ensure it is structured as follows:
```csv
inspection,user
<audit_id>,<user_id>
<audit_id>,<user_id>,
etc.
```

Run the following command:
`node index.mjs <token>`
