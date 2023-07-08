const WookieePeople = require('./wookieePeople');
const CommonPeople = require('./CommonPeople');

const peopleFactory = async (id, lang, config = {}) => {
    let people = null;
    if (lang == 'wookiee'){
        people = new WookieePeople(id);
    } else {
        people = new CommonPeople(id);
    }
    await people.init(config);
    return people;
}

module.exports = { peopleFactory }