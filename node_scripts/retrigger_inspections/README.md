# Bulk Set Owner
The purpose of this script is to update the `modified_at` parameter of an inspection by simply updating the site data with the existing site data. This leverages SafetyCulture's open API.

## Set Up:
This script does not use any modules. The `records` variable at line 1 can be replaced with an array of inspections from any SQL output. Below is an example of a SQL query that returns an array of inspections from a Postgres output from the SafetyCulture Exporter Tool.

```sql
SELECT '[' || string_agg(quote_literal(audit_id), ', ') || ']'
FROM inspections;
```

ro plans to make this script a little more efficient...

## Running the Script:

Run the following command:
`node index.js <token>`