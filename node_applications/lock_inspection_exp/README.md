
# Express App - Lock Record

This is a simple express POC that locks inspections upon completion on the SafetyCulture platform.

## Practical Technical Workflow:
```mermaid
flowchart LR
a[inspection_completed webhook]-.webhook.->
b[function processes response]-.->
c[function performs api call]-.->
d[function logs record]
```

## Cloud Env Considerations
Express apps can be run serverlessly using AWS Lambda or Azure Functions.

- AWS Lamba:
```bash
npm install aws-serverless-express
```

- Azure Functions:
```bash
npm install express @azure/functions
```
