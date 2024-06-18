const records = [] 

const token = process.argv[2]

async function getSite(audit) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'sc-integration-id': 'sc-readme',
        authorization: 'Bearer ' + token}
      };
    const url = 'https://api.safetyculture.io/inspections/v1/inspections/' + audit
    try {
        const response = await fetch(url,options);
    if (!response.ok) {
        throw new Error(`issue with call... ${response.status}`)
    }
    const data = await response.json()
    const siteId = data.inspection.site_id
    return siteId;
} catch (error) {
    console.error('error with api...', error)
    throw error
}
}

async function updateSite (audit,site) {
    const url = `https://api.safetyculture.io/inspections/v1/inspections/${audit}/site`;
    const options = {
        method: 'PUT',
        headers: {
            accept: 'application/json',
            'sc-integration-id': 'sc-readme',
            'content-type': 'application/json',
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ site_id: site })
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`Failed to update site for audit ${audit}. Status: ${response.status}`);
        }
        const responseData = await response.json();
    } catch (error) {
        console.error(`Error updating site for audit ${audit}:`, error);
        throw error;
    }
}

async function modifyAudit(item) {
    try{
        const sitePromise = getSite(item)
        const updatePromise = sitePromise.then(site => updateSite(item,site))
        await Promise.all([sitePromise,updatePromise])
        console.log(`${item} updated...`)
    } catch {
        console.error('error modifying record...', error)
    }
}

records.forEach(modifyAudit)

