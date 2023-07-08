const { getUrl } = require('./sharedService');
const { Planet } = require('../Planet');

const getPlanetById = async (app, id, isWookiee) => {
    let config = {};
    const result = await app.db.swPlanet.findByPk(id);
    if (result == null) {
        config = await getPlanetByIdRequest(app, id, isWookiee);
    } else {
        const { dataValues = null } = result;
        config = { name, gravity } = dataValues;
    }
    const planet = new Planet(id);
    planet.init(config);
    return planet;
}

const getPlanetByIdRequest = async (app, id, isWookiee) => {
    const url = getUrl(isWookiee, `https://swapi.dev/api/planets/${id}`);
    const data = await app.swapiFunctions.genericRequest(url, 'GET', null, false);
    if (data.detail) return null;

    let name, gravity;
    if (isWookiee) {
        name = data.whrascwo;
        gravity = getGravityNumber(data.rrrcrahoahaoro);
    } else {
        name = data.name;
        gravity = getGravityNumber(data.gravity);
    }
    return { name, gravity };
}

const getGravityNumber = (gravityString = '') => {
    if (gravityString == null) return 0;
    if (gravityString == undefined) return 0;
    if (gravityString.length == 0) return 0;
    const gravity = gravityString.substring(0, gravityString.indexOf(' '));
    if (gravity.length == 0) return 0;
    return parseFloat(gravity);
}

module.exports = {
    getPlanetById
};
