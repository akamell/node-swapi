const { getPeopleById } = require('../../app/services/getPeople');
const { getPlanetById } = require('../../app/services/getPlanet');
const { getWeightOnPlanetRandom } = require('../../app/services/getWeightOnPlanet');

const _isWookieeFormat = (req) => {
    if(req.query.format && req.query.format == 'wookiee'){
        return true;
    }
    return false;
}

const _getMetaData = (req) => {
    const { id = 0 } = req.params;
    const isWookiee = _isWookieeFormat(req);
    return {
        id,
        isWookiee,
    };
}

const applySwapiEndpoints = (server, app) => {

    server.get('/hfswapi/test', async (req, res) => {
        const data = await app.swapiFunctions.genericRequest('https://swapi.dev/api/', 'GET', null, true);
        res.send(data);
    });

    server.get('/hfswapi/getPeople/:id/', async (req, res) => {
        const { id, isWookiee } = _getMetaData(req);
        const people = await getPeopleById(app, id, isWookiee);
        res.send(people);
    });

    server.get('/hfswapi/getPlanet/:id', async (req, res) => {
        const { id, isWookiee } = _getMetaData(req);
        const planet = await getPlanetById(app, id, isWookiee);
        res.send(planet);
    });

    server.get('/hfswapi/getWeightOnPlanetRandom', async (req, res) => {
        const { isWookiee } = _getMetaData(req);
        const result = await getWeightOnPlanetRandom(app, isWookiee);
        res.send(result);
    });

    server.get('/hfswapi/getLogs',async (req, res) => {
        const data = await app.db.logging.findAll();
        res.send(data);
    });

}

module.exports = applySwapiEndpoints;