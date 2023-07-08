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
        gravity = data.acwoahrracao;
    } else {
        name = data.name;
        gravity = data.gravity;
    }
    return { name, gravity };
}

module.exports = {
    getPlanetById
};
