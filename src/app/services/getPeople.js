const { getUrl, getIdFromUrl } = require('./sharedService');
const { getHomeworldById } = require('./getHomeworld');
const { peopleFactory } = require('../../app/People');

const getPeopleById = async (app, id, isWookiee) => {
    let config = {};
    const result = await app.db.swPeople.findByPk(id);
    if (result == null) {
        config = await getPeopleByIdRequest(app, id, isWookiee);
    } else {
        const { dataValues = null } = result;
        config = { name, mass, height, homeworld_name, homeworld_id } = dataValues;
    }
    const lang = isWookiee ? 'wookiee' : '';
    const people = await peopleFactory(id, lang, config);
    return people;
}

const getPeopleByIdRequest = async (app, id, isWookiee) => {
    const url = getUrl(isWookiee, `https://swapi.dev/api/people/${id}`);
    const data = await app.swapiFunctions.genericRequest(url, 'GET', null, false);
    if (data.detail) return null;

    let name, mass, height, homeworld;
    if (isWookiee) {
        name = data.whrascwo;
        mass = data.acwoahrracao;
        height = data.scracc;
        homeworld = data.acooscwoohoorcanwa;
    } else {
        name = data.name;
        mass = data.mass;
        height = data.height;
        homeworld = data.homeworld;
    }
    const homeworldId = getIdFromUrl(homeworld);
    const { homeworld_id, homeworld_name } = await getHomeworldById(app, homeworldId, isWookiee);
    return { name, mass, height, homeworld_id, homeworld_name };
}

module.exports = { getPeopleById };
