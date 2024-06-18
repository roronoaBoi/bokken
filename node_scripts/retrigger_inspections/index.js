const records = ['audit_254deb3f84014250a76be4f3a5ca3fb0', 'audit_ed2cb7e2dba04eb7b1aea9ac837c6b7d', 'audit_7aeb57c3700c4db0ad8a71b2e1d8384c', 'audit_0fcc08398fc1473dae1e3bb08c322f6d', 'audit_331ce5ba8ab8436e8a3f7f00de3ad0cf', 'audit_e56903f8478545f085f1e0d5a7ee8348', 'audit_39d40b2de83a4b239b18fe3f2140f892', 'audit_30f19d0cff4e4fd495c7626843700b61', 'audit_fb08977c01e340cf93d586f6eb7ae844', 'audit_2425ac53d6894d5b8a9e3f9c981ca918', 'audit_9a8e7cfcfda844e4964a9efb3069b6fe', 'audit_ca847571d7534813bf09a2b64da018cd', 'audit_def47b635d0b47c7abae7cb3accea3b0', 'audit_66fb276d273845f3bd0d25b284b54f40', 'audit_115b8d829be94e239f662c5211d2ef56', 'audit_20c97568423c4afd884811a9a39186a1', 'audit_cc8fe22c2be644f4a92f36c9d8d04205', 'audit_6e3942ce82a74657a0c77860de5b134f', 'audit_f027aa7c14d74509a74b74561da902a5', 'audit_6f0429af9bbb46a6ae0a7b86fe1e8c35', 'audit_205bce0a065648468b35a1a50f43a940', 'audit_310f3cbe7f93485689029aa185e1f8e6', 'audit_15aeaa25ee594d42a765424335bb543c', 'audit_d9b7a81e4a2349bb9b6c89c070b9c38f', 'audit_c63196736e1d494c8d50d1c92ec83d8e', 'audit_0a50e14be86e4f88859f31561d5ace40', 'audit_d77d1be6735245d8a7c81bd92e112592', 'audit_d0016223b44c4fcd99bc0db4c1e3e73d', 'audit_8f8425f3372a4204aaddb274b93404d0', 'audit_fad8fdf0d795430f958f5db292969995', 'audit_73678816105c4c2e903c5c99f00d8ee0', 'audit_3726c7fe70084f0ab2debdb24ff2cd2d', 'audit_1dbb62c56c7b48ab91aec1f67f703158', 'audit_1c039151b5554f52be1b9965f65f7868', 'audit_b756a01f33fd48778060c580cea4eb62', 'audit_a8c5993f3ad0438baa3184032aeb0d98', 'audit_63dab1297048455e9b35af2442260228', 'audit_0d5b971b978d493681fc0b6107df2a50', 'audit_a1fa0b18daf74e4188e7d63cf9a37212', 'audit_13817614a08c46d4a8a0df6816ab595f', 'audit_1041e882f9b741a792aa582652f17378', 'audit_a42f952ebdf244b1be1b122980e83e7d', 'audit_b33d8faf7f66492fa603eea2114f9ab6', 'audit_8e3937932a0248fabdf32cc59efaa3a9', 'audit_90354199d5fa4c13a0cbe16b91df34e2', 'audit_cf5087f1504f421b9983003f8c6572c2', 'audit_9f2e28e3a4f54b0db509e600e2f4091a', 'audit_80bda22648234087b299d321b285dfa1', 'audit_07a57cb3d1dc435787a8607fead1fc9d', 'audit_4d45ca37ac854b0a804657aad26ab561', 'audit_ac5e63d5aec045b3b4694b04a7285255', 'audit_411b6467b1ad4087bbfe1df8da9abdfb', 'audit_214fc5639c5848f1b1498721da88ee51', 'audit_2f6bf19b89b14674b086050c0e4a0b05', 'audit_e4010950c3e04a8a841d726b3967966f', 'audit_9d0289684f084669ad82515eecf43bbc', 'audit_68773e6302b64bf7a65a5bdf40619c6d', 'audit_329243b9935f40319a8199e19607ce6c', 'audit_01e0b621936a45ec8139e2310a11b39c', 'audit_6c3b31317c53400492ae7c0e267b4082', 'audit_022929e8758349c2bfb1b4f4b38d02e1', 'audit_24b5bca0a0fc4f999d32dd27b99c9e62', 'audit_2d81189c26d7437b9ca526e6c9415415', 'audit_d5e48a5d68fe4635b04d60d372aac2c8', 'audit_4cb6a31f4df54d5fb708732729e2b651', 'audit_8373257fc6044841aad29e5cea5c6cae', 'audit_c064621894c64d7c84ca4f725b558f9d', 'audit_122008c0dd0244c6ab8822e03aee12df', 'audit_60887a6c70aa4aaa9d0afff18bf89703', 'audit_f95b4d847c8e4c99807316fb00ee7544', 'audit_8adca4efc2a445ca9b8c80fa888292b5', 'audit_1b5c1b82a028451eb342c1deff676939', 'audit_30550d4bfc4a4f37a9192a0021dc285d', 'audit_69830eb22d1e46a7b1507a0999ce2360', 'audit_d9f109c591de42e586632089d4096bc5', 'audit_6ad6cfb5c4264eb39e8d2177bbf56412', 'audit_50a95730acf746ce9579b16bd18243e3', 'audit_e001da38e95449cf83837e6344abb703', 'audit_574581baf1fe40769abed106fd1b46b1', 'audit_2e271b6ecc6449c783fb05fdfe50c61b', 'audit_1451486e2489486ea9ae6fa062eadf45', 'audit_4ef614cda32c42cd990b6d58cfa26133', 'audit_be4684240df74d5683c1fccc717d135d', 'audit_d1b996564549493a876ca99ab2f0bdd1', 'audit_3d4e09e4cc0d409196498c24639c0909', 'audit_3b8e0046e3ab4442a9857ad55ed58060', 'audit_ea85d0cdf65a4facba70df9c19f2d3cd', 'audit_cc3b2532bf574ebc94c3a5a567317e89', 'audit_0d9d8577dd2245109149eca2cfe62d16', 'audit_991b5943f0e342e4af93134d2a203764', 'audit_678bcc5ef8bb4d9c9887d2116e5caec2', 'audit_4b18e7b0279c40feb3b4d5c53b8a3e7c', 'audit_ab3b1363d4aa4a3c8f9dd5a18c96cfbb', 'audit_3c74ae571bfe42f092734c2077fa1221', 'audit_84e7c038609d41b5836f47da96960b51', 'audit_931c5cc9dce940ea9524fa08520c3b6a', 'audit_e9940cd6d4584ad5b731853160cb7427', 'audit_d951e3cd9b0044dc909f99bcaccdc970', 'audit_2629e5cde9a94fd6aeb4541424c5da2c', 'audit_90d1889766fb4565a26db3ff210f3116', 'audit_f87b633af2344b288f5b74dc2ca065cf', 'audit_75962996df454f3b9402a0a476faec38', 'audit_e650450c537a4680bbde59b91269e6f5', 'audit_8650e3b98b6c4897b07cd6f40f78e868']

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

