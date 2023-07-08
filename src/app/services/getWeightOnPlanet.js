const { getPeopleById } = require('./getPeople');
const { getPlanetById } = require('./getPlanet');
const { getWeightOnPlanet } = require('../swapiFunctions');
const { getRandomInt } = require('./sharedService');

const getWeightOnPlanetRandom = async(app, isWookiee) => {
    const personId = getRandomInt(10);
    const planetId = getRandomInt(10);
    const person = await getPeopleById(app, personId, isWookiee);
    const planet = await getPlanetById(app, planetId, isWookiee);

    const weight = getWeightOnPlanet(person.getMass(), planet.getGravity());
    return {
        people: {
            id: person.getId(),
            name: person.getName(),
            mass: person.getMass(),
        },
        planet: {
            id: planet.getId(),
            name: planet.getName(),
            gravity: planet.getGravity(),
        },
        weightOnPlanet: weight
    };
}

module.exports = {
    getWeightOnPlanetRandom
};
