const { getUrl } = require('./sharedService');

const getHomeworldById = async (app, id, isWookiee) => {
    const url = getUrl(isWookiee, `https://swapi.dev/api/planets/${id}`);
    const data = await app.swapiFunctions.genericRequest(url, 'GET', null, false);
    if (data.detail) return null;

    return { 
        homeworld_id: `/planets/${id}/`,
        homeworld_name: (isWookiee) ? data.whrascwo : data.name,
    }
}

module.exports = { getHomeworldById };